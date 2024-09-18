import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountCustomField extends LightningElement {
    @api recordId;

    handleSuccess(event) {
        this.showToast('SUCCESS', 'Record updated successfully!', 'success');
        //alert('Record updated successfully!');
        console.log('Record updated successfully! - Record ID:', event.detail.id);
    }

    handleError(event) {
        this.showToast('ERROR', 'An error occurred while updating', 'error');
        //alert('An error occurred while updating the record: ' + event.detail.message);
        console.error('An error occurred while updating the record:', event.detail.message);
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(event);
    }
}
