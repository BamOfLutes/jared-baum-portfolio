define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"About the REST APIs",
                    "href":"index.html"
                },
                {
                    "title":"All REST Endpoints",
                    "href":"rest-endpoints.html"
                }
            ]
        },
        {
            "heading":"Get Started",
            "topics":[
                {
                    "title":"Oracle Health Clinical Data Exchange",
                    "href":"cdex-intro.html"
                },
                {
                    "title":"Quick Start",
                    "href":"quick-start.html",
                    "topics":[
                        {
                            "title":"Quick Start for Oracle Health Clinical Data Exchange APIs",
                            "href":"quick-start_cdex.html"
                        },
                        {
                            "title":"Quick Start for FHIR R4 APIs",
                            "href":"quick-start_fhir.html"
                        }
                    ]
                },
                {
                    "title":"Authenticate",
                    "href":"authenticate.html",
                    "topics":[
                        {
                            "title":"Authenticate with an Oracle Cloud Infrastructure signature",
                            "href":"authenticate_oci.html"
                        },
                        {
                            "title":"Authenticate with a bearer access token",
                            "href":"authenticate_oauth2.html"
                        }
                    ]
                },
                {
                    "title":"Use cURL",
                    "href":"use-curl.html"
                },
                {
                    "title":"Send Requests",
                    "href":"send-requests.html"
                },
                {
                    "title":"Status Codes",
                    "href":"status-codes.html"
                }
            ]
        },
        {
            "heading":"Tasks",
            "topics":[
                {
                    "title":"Binary",
                    "href":"api-binary.html",
                    "topics":[
                        {
                            "title":"Get a binary document by ID",
                            "href":"op-fhir-r4-query_endpoint_alias-binary-id-get.html"
                        }
                    ]
                },
                {
                    "title":"cdexHub",
                    "href":"api-cdexhub.html",
                    "topics":[
                        {
                            "title":"Cancel work requests",
                            "href":"op-20180828-workrequests-workrequestid-delete.html"
                        },
                        {
                            "title":"Create a DeliveryEndpoint",
                            "href":"op-20180828-deliveryendpoints-post.html"
                        },
                        {
                            "title":"Create a QueryEndpoint",
                            "href":"op-20180828-queryendpoints-post.html"
                        },
                        {
                            "title":"Delete a DeliveryEndpoint",
                            "href":"op-20180828-deliveryendpoints-deliveryendpointid-delete.html"
                        },
                        {
                            "title":"Delete a QueryEndpoint",
                            "href":"op-20180828-queryendpoints-queryendpointid-delete.html"
                        },
                        {
                            "title":"Get a DeliveryEndpoint",
                            "href":"op-20180828-deliveryendpoints-deliveryendpointid-get.html"
                        },
                        {
                            "title":"Get a list of DataSharingAgreements",
                            "href":"op-20180828-datasharingagreements-get.html"
                        },
                        {
                            "title":"Get a list of DataSharingConstraints",
                            "href":"op-20180828-datasharingconstraints-get.html"
                        },
                        {
                            "title":"Get a list of DeliveryEndpoints",
                            "href":"op-20180828-deliveryendpoints-get.html"
                        },
                        {
                            "title":"Get a list of PayerDirectoryEntries",
                            "href":"op-20180828-payerdirectoryentries-get.html"
                        },
                        {
                            "title":"Get a list of Payers",
                            "href":"op-20180828-payers-get.html"
                        },
                        {
                            "title":"Get a list of ProviderDirectoryEntries",
                            "href":"op-20180828-providerdirectoryentries-get.html"
                        },
                        {
                            "title":"Get a list of QueryEndpoints",
                            "href":"op-20180828-queryendpoints-get.html"
                        },
                        {
                            "title":"Get a Payer",
                            "href":"op-20180828-payers-payerid-get.html"
                        },
                        {
                            "title":"Get a PayerDirectoryEntry",
                            "href":"op-20180828-payerdirectoryentries-payerdirectoryentryid-get.html"
                        },
                        {
                            "title":"Get a QueryEndpoint",
                            "href":"op-20180828-queryendpoints-queryendpointid-get.html"
                        },
                        {
                            "title":"Get work request status",
                            "href":"op-20180828-workrequests-workrequestid-get.html"
                        },
                        {
                            "title":"List work request errors",
                            "href":"op-20180828-workrequests-workrequestid-errors-get.html"
                        },
                        {
                            "title":"List work request logs",
                            "href":"op-20180828-workrequests-workrequestid-logs-get.html"
                        },
                        {
                            "title":"List work requests",
                            "href":"op-20180828-workrequests-get.html"
                        },
                        {
                            "title":"Move the DeliveryEndpoint into a different compartment",
                            "href":"op-20180828-deliveryendpoints-deliveryendpointid-actions-changecompartment-post.html"
                        },
                        {
                            "title":"Move the QueryEndpoint into a different compartment",
                            "href":"op-20180828-queryendpoints-queryendpointid-actions-changecompartment-post.html"
                        },
                        {
                            "title":"Test DeliveryEndpoint connectivity",
                            "href":"op-20180828-deliveryendpoints-deliveryendpointid-actions-testconnectivity-post.html"
                        },
                        {
                            "title":"Update a DeliveryEndpoint",
                            "href":"op-20180828-deliveryendpoints-deliveryendpointid-put.html"
                        },
                        {
                            "title":"Update a PayerDirectoryEntry",
                            "href":"op-20180828-payerdirectoryentries-payerdirectoryentryid-put.html"
                        },
                        {
                            "title":"Update a QueryEndpoint",
                            "href":"op-20180828-queryendpoints-queryendpointid-put.html"
                        }
                    ]
                },
                {
                    "title":"DocumentReference",
                    "href":"api-documentreference.html",
                    "topics":[
                        {
                            "title":"Get a document reference by ID",
                            "href":"op-fhir-r4-query_endpoint_alias-documentreference-id-get.html"
                        },
                        {
                            "title":"Get a list of document references",
                            "href":"op-fhir-r4-query_endpoint_alias-documentreference-get.html"
                        }
                    ]
                },
                {
                    "title":"Patient",
                    "href":"api-patient.html",
                    "topics":[
                        {
                            "title":"Get a patient list",
                            "href":"op-fhir-r4-query_endpoint_alias-patient-get.html"
                        },
                        {
                            "title":"Get a patient record by ID",
                            "href":"op-fhir-r4-query_endpoint_alias-patient-id-get.html"
                        }
                    ]
                }
            ]
        }
    ]
});