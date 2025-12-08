import { LightningElement, api, wire } from 'lwc';
import getTrucksByBrand from '@salesforce/apex/TruckController.getTrucksByBrand';
import Mahindra from '@salesforce/resourceUrl/Mahindra';
import Tata from '@salesforce/resourceUrl/TataMotors';
import Ashok_Leyland from '@salesforce/resourceUrl/AshokLeyland';
import Eicher from '@salesforce/resourceUrl/Eicher';
import truckImg from '@salesforce/resourceUrl/happyTruck';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import CONTACT_ID from '@salesforce/schema/User.ContactId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Booking1 extends NavigationMixin(LightningElement) {
    @api brand;
    trucks = [];
    brandTitle = '';
    brandImage;
    tImg = truckImg;
    showTrucks = true;
    bookcon = false;
    recordId;
    selectedTruckId;
    detailcon = true;
    s2 = false;
    s3 = false;
    error;

    @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_ID] })
    wired({ data, error }) {
        if (data) {
            this.recordId = getFieldValue(data, CONTACT_ID);
        } else if (error) {
            this.error = error;
        }
    }

    connectedCallback() {
        this.brandTitle = `${this.brand} Trucks`;
        this.setBrandImage(this.brand);
        this.fetchTrucks();
    }

    setBrandImage(brand) {
        switch (brand) {
            case 'Mahindra':
                this.brandImage = Mahindra;
                break;
            case 'Tata':
            case 'TataMotors':
                this.brandImage = Tata;
                break;
            case 'AshokLeyland':
                this.brandImage = Ashok_Leyland;
                break;
            case 'Eicher':
                this.brandImage = Eicher;
                break;
            default:
                this.brandImage = '';
        }
    }

    fetchTrucks() {
        getTrucksByBrand({ brand: this.brand })
            .then(result => {
                this.trucks = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleClick(event) {
        const action = event.target.name;
        const truckId = event.target.dataset.id;
        if (action == 'book') {
            this.selectedTruckId = truckId;
            this.bookcon = true;
            this.showTrucks = false;
        } else if (action == 'back') {
            this.showTrucks = true;
            this.bookcon = false;
        } else if (action == 'back1') {
            this.bookcon = true;
            this.s2 = false;
        } else if (action == 'ord') {
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: { url: '/truckkkkkkk' }
            });
        }
    }

    goBack() {
        const backEvent = new CustomEvent('back');
        this.dispatchEvent(backEvent);
    }

    handleSuccess() {
        this.showTrucks = false;
        this.bookcon = false;
        this.s2 = true;
    }

    handleBookingSuccess() {
        this.s2 = false;
        this.s3 = true;
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Truck Booked Successfully',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}
