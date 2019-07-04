export class TransferModel {
    destination_id: string; // Requester Going to
    source_id: string; // Requester going from
    amount: number; // The volume of the payment
    currency_send: string; // The Currency type from the source
    currency_rec: string; // The Currency on the receiver side
}