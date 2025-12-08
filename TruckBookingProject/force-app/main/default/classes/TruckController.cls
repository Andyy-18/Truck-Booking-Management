public with sharing class TruckController {
    @AuraEnabled
    public static List<Truck__c> getTrucksByBrand(String brand) {
        return [SELECT Id, Truck_Id__c, Name, Brand__c, Cost_of_Booking__c,
                Availability_of_Truck__c, Maximum_Load__c
                FROM Truck__c
                WHERE Brand__c = :brand
                AND Availability_of_Truck__c = true];
    }
}
