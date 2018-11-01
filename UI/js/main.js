var  parcel_order_modal = document.getElementById('order-parcel-modal');
var update_parcel_Destination_modal= document.getElementById('update-parcel-modal');
var parcel_location_modal = document.getElementById('parcel-location-modal');
function display_add_parcel_order() {
    parcel_order_modal.style.display = "block";
}
/* function to close the order parcel modal*/
function close_modal() {
    parcel_order_modal.style.display ="none";
    update_parcel_Destination_modal.style.display="none";
    parcel_location_modal.style.display ="none"

}
/* function update Delivery Modal */
function update_parcel_order() {
    update_parcel_Destination_modal.style.display="block";
}
/* functions to update location and status modal*/
function update_location_modal() {
    parcel_location_modal.style.display ="block"
}
function close_update_modal(){
    parcel_location_modal.style.display="none";
}