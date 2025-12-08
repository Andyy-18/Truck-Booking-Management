public with sharing class MyOrder {
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> main() {
        return [SELECT Id, Name,
                (SELECT Id FROM Paymentss__r LIMIT 1),
                Truck_Name__r.Brand__c,
                Customer_s_Load__c,
                Date_Of_Booking__c,
                Drop_Address__c,
                Payment_Type__c,
                Pickup_Address__c,
                Status__c,
                Truck_Name__c
                FROM Truck_Booking__c
                WHERE CreatedById = :UserInfo.getUserId()
                ORDER BY Date_Of_Booking__c DESC];
    }
}
