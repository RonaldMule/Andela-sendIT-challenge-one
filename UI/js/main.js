var  parcel_order_modal = document.getElementById('order-parcel-modal');
var update_parcel_Destination_modal= document.getElementById('update-parcel-modal');
function display_add_parcel_order() {
    parcel_order_modal.style.display = "block";
}
/* function to close the order parcel modal*/
function close_modal() {
    parcel_order_modal.style.display ="none";
    update_parcel_Destination_modal.style.display="none";
}
/* function update Delivery Modal */
function update_parcel_order() {
    update_parcel_Destination_modal.style.display="block";
}