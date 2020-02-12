let faker = require('faker');

function generateTicket(){
    let ticket = {
        id: 999552, 
        version: "1.1.0", 
        commodity_id: "sb",
        elevator_id: "GRAN0001",
        display_id: 999552,
        identifier: 999552,
        user_id: 9090551,
        created_at: new Date(2019, 10, 28, 13, 10, 15),
        updated_at: new Date(2019, 10, 28, 13, 10, 15),
        deleted_at: null,

        primary_dock_weight: 4.96,
        primary_gross_weight: 495.67,
        primary_net_weight: 423.24,
        primary_shrink_weight: 67.47,
        primary_tare_weight: null,
        primary_weight_uom: "BU",
        secondary_dock_weight: 1.0,
        secondary_gross_weight: 42202.0,
        secondary_net_weight: 24199.0,
        secondary_shrink_weight: 12.75,
        secondary_tare_weight: 14711.0,
        secondary_weight_uom: "lbs",

        remarks: [
            {
                grade_factor: "Test Weight",
                grade_factor_code: "TW",
                grade_factor_value: 12.0,
                dock_value: null,
                dock_unit: null
            },
            {
                grade_factor: "Moisture",
                grade_factor_code: "Moisture",
                grade_factor_value: 10.6,
                dock_value: null,
                dock_unit: null
            },
            {
                grade_factor: "damage",
                grade_factor_code: "DAMAGE",
                grade_factor_value: 3.2,
                dock_value: null,
                dock_unit: null
            },
            {
                grade_factor: "Monetary moisture discount",
                grade_factor_code: "Mon MS",
                grade_factor_value: 11.6,
                dock_value: null,
                dock_unit: null
            }
        ],

        sample_id: null,
        truck_driver: null,
        truck_license: null,
        truck_name: null,
        weigh_in_at: null,
        weigh_master: null,
        weigh_out_at: null,
        field_name: null,
        field_id: null,
        grader: null,
        lot_id: null
    };

    console.log(JSON.stringify(ticket));

}

generateTicket();
