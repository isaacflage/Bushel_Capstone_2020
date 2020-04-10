ERRORS = [];

function validate(ticketsWeCreated, ticketsFromCentre){
    //ticket arrays
    ticketsArrayOrigin = ticketsWeCreated.data[1]["update-tickets"].tickets;
    ticketsArrayCentre = ticketsFromCentre.data;

    //checks id vs remote id
    hasIds = true;
    
    ids = [];
    ticketsArrayOrigin.forEach(i => {
        ids.push(i.id);  
    });

    remoteIds = [];
    ticketsArrayCentre.forEach(i => {
        remoteIds.push(i["remote_id"]);
    });

    ids.forEach(i => {
        if(!remoteIds.includes(i)){
            hasIds = false; 
        }
    });

    return hasIds;

}

function validateTicket(ticketWeCreated, ticketFromCentre){

}

module.exports.validate = function(ticketsWeCreated, ticketsFromCentre){
    return validate(ticketsWeCreated, ticketsFromCentre);
}

// console.log(validate({"data":[{"update-splits":{"splits":[{"id":"149f7561-adbc-42a5-a723-ba9057cacbbf","ticket_id":"8473f049-9214-4d80-a7b6-5bf11acf3355","position_id":"efae2351-24eb-4fcd-be91-e5be15190286","contract_id":"d1968744-92b0-468d-a5c6-65a3e9a57e14","amount":25,"amount_type":"percentage","created_at":"2020-03-30T18:25:51.665Z","updated_at":"2020-03-31T06:22:02.474Z","user_id":"2020001","user_name":"Capstone Team"},{"id":"b7e060ca-1156-4f52-bd65-190c7a51cd7a","ticket_id":"8473f049-9214-4d80-a7b6-5bf11acf3355","position_id":"f60d7f73-08aa-4a1d-bc3e-040ad7b264cc","contract_id":"0fc29c8a-67e3-47ee-a564-8a07485ed571","amount":25,"amount_type":"percentage","created_at":"2020-03-31T07:31:51.232Z","updated_at":"2020-03-31T16:17:07.494Z","user_id":"K3523","user_name":"Trudie Fahey"},{"id":"9bea345b-f46f-45c7-8a55-101364c1e124","ticket_id":"8473f049-9214-4d80-a7b6-5bf11acf3355","position_id":"aab2378f-1de4-4de3-a620-0c922656d0f2","contract_id":"c7660147-de5d-4abd-b1fb-63a680de877a","amount":25,"amount_type":"percentage","created_at":"2020-03-31T06:47:04.364Z","updated_at":"2020-03-31T09:15:43.445Z","user_id":"O6234","user_name":"Rose Gusikowski"},{"id":"2342e059-2a71-4ab3-bfb1-439ec3fe7985","ticket_id":"8473f049-9214-4d80-a7b6-5bf11acf3355","position_id":"7f3d067c-d7c2-4d7d-86c5-9d0bc49a4372","contract_id":"69ffea7c-a62e-478a-90d8-79f80322c0da","amount":25,"amount_type":"percentage","created_at":"2020-03-30T19:38:44.287Z","updated_at":"2020-03-31T04:43:20.356Z","user_id":"Q4393","user_name":"Ms. Jerome Rolfson"}]}},{"update-tickets":{"tickets":[{"id":"8473f049-9214-4d80-a7b6-5bf11acf3355","version":"1.1.0","commodity_id":"SB","elevator_id":"GRAN06","display_id":"c740486d-9e15-4bf1-862f-a892bec0d898","identifier":"b9c88b06-5f18-4d89-bf27-fa9367af6010","user_id":null,"created_at":"2020-03-31T16:53:27.516Z","updated_at":"2020-03-30T19:30:36.004Z","deleted_at":null,"primary_dock_weight":0,"primary_gross_weight":"453.27","primary_shrink_weight":"62.32","primary_tare_weight":"94.63","primary_weight_uom":"BU","primary_net_weight":"296.32","secondary_dock_weight":"6.42","secondary_gross_weight":"42139.80","secondary_shrink_weight":"8.57","secondary_tare_weight":"14705.22","secondary_weight_uom":"lbs","secondary_net_weight":"27419.59","remarks":[],"sample_id":"a604bc21-c431-4d89-8038-2cb6bb77c433","truck_driver":"Angie Bechtelar","truck_license":"c2c36753-8822-4fe7-84ea-cbbfef74001d","truck_name":"Semi 7","weigh_in_at":"2020-03-31T07:25:08.149Z","weigh_master":"Dahlia Yundt","weigh_out_at":"2020-03-31T17:27:48.424Z","field_name":"Fresh","field_id":"528161b9-69b6-4403-941e-5525e09c3aa8","grader":"Darrell Gaylord","lot_id":"7e634888-7af5-4c33-8021-2a599b3f3ee3"}]}},{"update-elevators":{"elevators":[{"id":"GRAN01","name":"Capstone Elevator1","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN02","name":"Capstone Elevator2","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN03","name":"Capstone Elevator3","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN04","name":"Capstone Elevator4","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN05","name":"Capstone Elevator5","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN06","name":"Capstone Elevator6","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN07","name":"Capstone Elevator7","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN08","name":"Capstone Elevator8","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN09","name":"Capstone Elevator9","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null},{"id":"GRAN010","name":"Capstone Elevator10","address_line_1":null,"address_line_2":null,"city":"Fargo","state":"ND","zip_code":58102,"phone":null,"fax":null,"email":null,"website":null}]}}]}, {"data":[{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T14:13:04+00:00","elevator_id":2952,"elevator_name":"Capstone Elevator4","id":8672928,"remarks":[{"type":"application","name":"Application","value":"2.5","dock_unit":"9.32","dock_value":"101.81"},{"type":"interface","name":"Interface","value":"4.2","dock_unit":"4.64","dock_value":"1010.67"},{"type":"matrix","name":"Matrix","value":"3.6","dock_unit":"4.57","dock_value":"102.81"},{"type":"microchip","name":"Microchip","value":"9.3","dock_unit":"2.89","dock_value":"104.75"}],"remote_id":"0ee49ad4-825e-4991-9e59-fd961c8aef06","remote_user_id":"2020001","updated_at":"2020-03-09T16:35:22+00:00","weigh_in_at":"2020-03-10T14:13:04+00:00","weigh_out_at":"2020-03-10T08:59:52+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"W","crop_primary_measure":"amount","crop_weight_uom":"kgs","gross_weight":"42,164.48","net_amount":"399.81","net_weight":"27,504.88","tare_weight":"14,652.31","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T11:37:26+00:00","elevator_id":2940,"elevator_name":"Capstone Elevator9","id":8672955,"remarks":[{"type":"application","name":"Application","value":"8.0","dock_unit":"9.63","dock_value":"108.60"}],"remote_id":"a0eafc39-3350-4317-b2de-7f43c53c3765","remote_user_id":"Split","updated_at":"2020-03-10T09:48:16+00:00","weigh_in_at":"2020-03-10T11:37:26+00:00","weigh_out_at":"2020-03-10T09:16:37+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"O","crop_primary_measure":"amount","crop_weight_uom":"kgs","gross_weight":"42,134.95","net_amount":"328.46","net_weight":"27,491.14","tare_weight":"14,632.45","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T09:41:01+00:00","elevator_id":2937,"elevator_name":"Capstone Elevator5","id":8672940,"remarks":[{"type":"array","name":"Array","value":"2.0","dock_unit":"8.74","dock_value":"107.68"},{"type":"capacitor","name":"Capacitor","value":"10.2","dock_unit":"5.69","dock_value":"102.13"},{"type":"driver","name":"Driver","value":"7.2","dock_unit":"10.29","dock_value":"1010.48"},{"type":"matrix","name":"Matrix","value":"4.5","dock_unit":"1.21","dock_value":"109.39"},{"type":"panel","name":"Panel","value":"10.5","dock_unit":"7.11","dock_value":"109.46"}],"remote_id":"69d69714-26d0-4445-a680-4ee6eb27b4a2","remote_user_id":"Split",
// "updated_at":"2020-03-10T00:55:25+00:00","weigh_in_at":"2020-03-10T09:41:01+00:00","weigh_out_at":"2020-03-09T20:40:31+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"W","crop_primary_measure":"amount","crop_weight_uom":"lbs","gross_weight":"42,143.1","net_amount":"391.2","net_weight":"27,463.14","tare_weight":"14,672.55","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T09:35:35+00:00","elevator_id":2952,"elevator_name":"Capstone Elevator4","id":8672949,"remarks":[{"type":"application","name":"Application","value":"6.0","dock_unit":"2.00","dock_value":"107.17"},{"type":"array","name":"Array","value":"2.2","dock_unit":"4.04","dock_value":"101.36"},{"type":"bus","name":"BUS","value":"8.8","dock_unit":"9.34","dock_value":"101.91"},{"type":"circuit","name":"Circuit","value":"9.2","dock_unit":"1.98","dock_value":"102.00"},{"type":"feed","name":"Feed","value":"2.3","dock_unit":"1.56","dock_value":"108.18"},{"type":"matrix","name":"Matrix","value":"9.7","dock_unit":"3.79","dock_value":"103.34"},{"type":"panel","name":"Panel","value":"9.6","dock_unit":"8.36","dock_value":"105.57"},{"type":"protocol","name":"Protocol","value":"10.4","dock_unit":"1.12","dock_value":"109.01"}],"remote_id":"cc325cb2-6af8-4c80-904d-023d40235e8f","remote_user_id":"Split","updated_at":"2020-03-10T14:09:27+00:00","weigh_in_at":"2020-03-10T09:35:35+00:00","weigh_out_at":"2020-03-09T19:10:32+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"S","crop_primary_measure":"amount","crop_weight_uom":"lbs","gross_weight":"42,153.57","net_amount":"443.7","net_weight":"27,453.37","tare_weight":"14,687.31","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T08:47:05+00:00","elevator_id":2940,"elevator_name":"Capstone Elevator9","id":8672943,"remarks":[{"type":"array","name":"Array","value":"8.8","dock_unit":"10.37","dock_value":"105.14"},{"type":"bus","name":"BUS","value":"9.7","dock_unit":"3.06","dock_value":"1010.38"},{"type":"driver","name":"Driver","value":"6.9","dock_unit":"6.55","dock_value":"1010.88"},{"type":"matrix","name":"Matrix","value":"1.2","dock_unit":"8.93","dock_value":"105.44"},{"type":"panel","name":"Panel","value":"3.7","dock_unit":"1.13","dock_value":"103.91"},{"type":"protocol","name":"Protocol","value":"7.4","dock_unit":"6.50","dock_value":"104.81"}],"remote_id":"0cbf7b39-ab32-46aa-873f-a8dfed8de338","remote_user_id":"Split","updated_at":"2020-03-09T18:37:13+00:00","weigh_in_at":"2020-03-10T08:47:05+00:00","weigh_out_at":"2020-03-10T02:11:23+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"H","crop_primary_measure":"amount","crop_weight_uom":"kgs","gross_weight":"42,202.72","net_amount":"347.15","net_weight":"27,508.53","tare_weight":"14,671.25","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T04:50:48+00:00","elevator_id":2958,"elevator_name":"Capstone Elevator6","id":8672934,"remarks":[{"type":"bandwidth","name":"Bandwidth","value":"6.3","dock_unit":"3.52","dock_value":"1010.47"},{"type":"circuit","name":"Circuit","value":"5.5","dock_unit":"4.23","dock_value":"105.86"},{"type":"hard drive","name":"Hard Drive","value":"1.6","dock_unit":"1.08","dock_value":"109.35"},{"type":"port","name":"Port","value":"10.5","dock_unit":"6.17","dock_value":"107.84"},{"type":"program","name":"Program","value":"10.6","dock_unit":"9.49","dock_value":"106.66"},{"type":"protocol","name":"Protocol","value":"4.1","dock_unit":"9.07","dock_value":"104.94"},{"type":"sensor","name":"Sensor","value":"10.6","dock_unit":"4.45","dock_value":"109.48"}],"remote_id":"a127a2be-f532-4e39-bc27-092759aeaa77","remote_user_id":"Split","updated_at":"2020-03-10T03:00:06+00:00","weigh_in_at":"2020-03-10T04:50:48+00:00","weigh_out_at":"2020-03-10T04:58:08+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"FV","crop_primary_measure":"amount","crop_weight_uom":"kgs","gross_weight":"42,190.36","net_amount":"390.23","net_weight":"27,539.81","tare_weight":"14,634.45","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-10T01:46:34+00:00","elevator_id":2955,"elevator_name":"Capstone Elevator0","id":8672931,"remarks":[],"remote_id":"0c5847d7-03ca-4a64-bf38-86130c22acf9","remote_user_id":"Split","updated_at":"2020-03-09T18:20:28+00:00","weigh_in_at":"2020-03-10T01:46:34+00:00","weigh_out_at":"2020-03-10T06:50:13+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"O","crop_primary_measure":"amount","crop_weight_uom":"lbs","gross_weight":"42,196.73","net_amount":"310.65","net_weight":"27,488.42","tare_weight":"14,685.27","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-09T18:54:11+00:00","elevator_id":2952,"elevator_name":"Capstone Elevator4","id":8672946,"remarks":[{"type":"port","name":"Port","value":"8.6","dock_unit":"5.09","dock_value":"109.56"}],"remote_id":"88f49cff-9abb-437d-8944-d222639ff001","remote_user_id":"Split","updated_at":"2020-03-10T09:19:24+00:00","weigh_in_at":"2020-03-09T18:54:11+00:00","weigh_out_at":"2020-03-10T02:56:29+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"S","crop_primary_measure":"amount","crop_weight_uom":"lbs","gross_weight":"42,127.71","net_amount":"243.15","net_weight":"27,473.51","tare_weight":"14,638.39","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-09T16:51:28+00:00","elevator_id":2961,"elevator_name":"Capstone Elevator2","id":8672952,"remarks":[{"type":"microchip","name":"Microchip","value":"1.4","dock_unit":"3.65","dock_value":"102.47"}],"remote_id":"24efd5da-6e34-4208-a78f-e042866a9ec5","remote_user_id":"Split","updated_at":"2020-03-10T05:36:13+00:00","weigh_in_at":"2020-03-09T16:51:28+00:00","weigh_out_at":"2020-03-09T19:50:10+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"P","crop_primary_measure":"amount","crop_weight_uom":"kgs","gross_weight":"42,161.96","net_amount":"389.64","net_weight":"27,523.03","tare_weight":"14,623.71","configurable_field_value":""},{"company_name":"Capstone 2020","company_branding_image":null,"contract_id":null,"created_at":"2020-03-09T15:20:28+00:00","elevator_id":2937,"elevator_name":"Capstone Elevator5","id":8672937,"remarks":[{"type":"hard drive","name":"Hard Drive","value":"2.5","dock_unit":"10.33","dock_value":"104.37"},{"type":"matrix","name":"Matrix","value":"9.5","dock_unit":"7.11","dock_value":"1010.04"},{"type":"pixel","name":"Pixel","value":"9.5","dock_unit":"1.14","dock_value":"1010.01"},{"type":"protocol","name":"Protocol","value":"7.7","dock_unit":"1.98","dock_value":"107.02"},{"type":"sensor","name":"Sensor","value":"5.4","dock_unit":"4.64","dock_value":"108.64"},{"type":"system","name":"System","value":"10.6","dock_unit":"2.13","dock_value":"106.64"}],"remote_id":"437a1d24-97f7-419b-bfc6-34bbf0ad58f3","remote_user_id":"2020001","updated_at":"2020-03-09T22:25:29+00:00","weigh_in_at":"2020-03-09T15:20:28+00:00","weigh_out_at":"2020-03-10T00:01:35+00:00","configurable_field_label":null,"crop_amount_uom":"bu","crop_id":0,"crop_name":"P","crop_primary_measure":"amount","crop_weight_uom":"lbs","gross_weight":"42,112.79","net_amount":"346.24","net_weight":"27,435.94","tare_weight":"14,667.08","configurable_field_value":""}],"meta":{"pagination":{"total":10,"count":10,"per_page":20,"current_page":1,"total_pages":1,"links":{}}}}));