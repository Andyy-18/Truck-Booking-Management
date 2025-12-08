import { LightningElement, track } from 'lwc';
import mahindraLogo from '@salesforce/resourceUrl/Mahindra';
import TataLogo from '@salesforce/resourceUrl/TataMotors';
import AshokLogo from '@salesforce/resourceUrl/AshokLeyland';
import EicherLogo from '@salesforce/resourceUrl/Eicher';
import { NavigationMixin } from 'lightning/navigation';

export default class Home1 extends NavigationMixin(LightningElement) {
    @track selectedBrand;
    mah = mahindraLogo;
    tata = TataLogo;
    ashok = AshokLogo;
    eicher = EicherLogo;
    s = false;
    s1 = true;
    brands = [
        { label: 'Tata Motor', value: 'TataMotors', image: this.tata },
        { label: 'Ashok Leyland', value: 'AshokLeyland', image: this.ashok },
        { label: 'Mahindra', value: 'Mahindra', image: this.mah },
        { label: 'Eicher', value: 'Eicher', image: this.eicher }
    ];

    handleBrandClick(event) {
        this.selectedBrand = event.currentTarget.dataset.brand;
    }

    handleBack() {
        this.selectedBrand = null;
    }

    handleClick(e) {
        let act = e.target.name;
        if (act == 'createBooking') {
            this.s = true;
            this.s1 = false;
        } else if (act == 'myOrders') {
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: { url: '/truckkkkkkk' }
            });
        }
    }
}
