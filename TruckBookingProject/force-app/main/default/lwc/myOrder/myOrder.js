import { LightningElement, wire } from 'lwc';
import mahindraLogo from '@salesforce/resourceUrl/Mahindra';
import TataLogo from '@salesforce/resourceUrl/TataMotors';
import AshokLogo from '@salesforce/resourceUrl/AshokLeyland';
import EicherLogo from '@salesforce/resourceUrl/Eicher';
import cls from '@salesforce/apex/MyOrder.main';
import { NavigationMixin } from 'lightning/navigation';

export default class MyOrder extends NavigationMixin(LightningElement) {
    brandLogos = {
        'Mahindra': mahindraLogo,
        'Tata_Motors': TataLogo,
        'Ashok_Leyland': AshokLogo,
        'Eicher': EicherLogo
    }
    bookings = [];

    @wire(cls) wired({ data, error }) {
        if (data) {
            this.bookings = data.map(book => ({
                ...book,
                brandLogo: this.brandLogos[book.Truck_Name__r?.Brand__c] || null,
                brandName: book.Truck_Name__r?.Brand__c || 'Unknown',
                fDate: book.Date_Of_Booking__c ? new Date(book.Date_Of_Booking__c).toLocaleDateString('en-IN') : '',
                isCompleted: book.Status__c === 'Completed',
                paymentId: book.Paymentss__r?.[0]?.Id
            }));
        } else if (error) {
            // handle error
        }
    }

    handleClick(e) {
        let n = e.target.name;
        if (n == 'a') {
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: { url: 'https://forms.gle/ZXajUCoRYjvZqHjS6' }
            });
        } else if (n == 'b') {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: { recordId: e.target.dataset.id, objectApiName: 'Truck_Booking__c', actionName: 'view' }
            });
        } else if (n == 'c') {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: { recordId: e.target.dataset.id, objectApiName: 'Payments__c', actionName: 'view' }
            });
        } else if (n == 'd') {
            // invoice action
        }
    }
}
