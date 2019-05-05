export const airbnbSet =  {
  "data": [
    {
      "id": "a1",
      "name": "Airbnb ",
      "parent": null,
      "type": "p",
      "disable": false,
      "fadeOpen": false,
      "children": [
        {
          "id": "b1",
          "parent": {
            "id": "a1"
          },
          "name": "Recommended",
          "type": "p",
          "disable": false,
          "fadeOpen": false,
          "children": [
            {
              "id": "1556810616422",
              "name": "Tokyo",
              "parent": {
                "id": "b1"
              },
              "children": [],
              "disable": false,
              "type": "e",
              "fadeOpen": false,
              "log": [],
              "message": "Rooms in Tokyo"
            },
            {
              "id": "1556810633583",
              "name": "Taipei",
              "parent": {
                "id": "b1"
              },
              "children": [],
              "disable": false,
              "type": "e",
              "fadeOpen": false,
              "log": [],
              "message": "Rooms in Taipei"
            },
            {
              "id": "1556810661422",
              "name": "Berlin",
              "parent": {
                "id": "b1"
              },
              "children": [],
              "disable": false,
              "type": "e",
              "fadeOpen": false,
              "log": [],
              "message": "Rooms in Berlin"
            }
          ]
        },
        {
          "id": "b3",
          "parent": {
            "id": "a1"
          },
          "name": "Saved",
          "type": "p",
          "disable": false,
          "fadeOpen": false,
          "children": [
            {
              "id": "1556810516365",
              "name": "Saved room lists",
              "parent": {
                "id": "b3"
              },
              "children": [],
              "disable": false,
              "type": "c",
              "fadeOpen": false,
              "log": [],
              "message": "Information from this event"
            }
          ]
        },
        {
          "id": "1556810385755",
          "name": "Search",
          "parent": {
            "id": "a1"
          },
          "children": [],
          "disable": false,
          "type": "e",
          "fadeOpen": false,
          "log": [],
          "message": "Rooms based on the search"
        },
        {
          "id": "1556810427350",
          "name": "Room Lists",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1556810473682",
              "name": "Room Information",
              "parent": {
                "id": "1556810427350"
              },
              "children": [
                {
                  "id": "1556810904324",
                  "name": "Reviews",
                  "parent": {
                    "id": "1556810473682"
                  },
                  "children": [
                    {
                      "id": "1556810914019",
                      "name": "Have you lived in this room?",
                      "parent": {
                        "id": "1556810904324"
                      },
                      "children": [
                        {
                          "id": "1556810947954",
                          "name": "Leave a review",
                          "parent": {
                            "id": "1556810914019"
                          },
                          "children": [],
                          "disable": true,
                          "type": "e",
                          "fadeOpen": false,
                          "log": [],
                          "message": "Add a review by past guest"
                        },
                        {
                          "id": "1556810983758",
                          "name": "Score",
                          "parent": {
                            "id": "1556810914019"
                          },
                          "children": [],
                          "disable": true,
                          "type": "e",
                          "fadeOpen": false,
                          "log": [],
                          "message": "Score by past guest"
                        }
                      ],
                      "disable": true,
                      "type": "l",
                      "fadeOpen": false,
                      "log": [],
                      "message": "Information from this event"
                    }
                  ],
                  "disable": false,
                  "type": "c",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                },
                {
                  "id": "1556811153153",
                  "name": "Book",
                  "parent": {
                    "id": "1556810473682"
                  },
                  "children": [],
                  "disable": false,
                  "type": "e",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                },
                {
                  "id": "1556811202587",
                  "name": "Save",
                  "parent": {
                    "id": "1556810473682"
                  },
                  "children": [],
                  "disable": false,
                  "type": "e",
                  "fadeOpen": false,
                  "log": [],
                  "message": "save a room"
                }
              ],
              "disable": false,
              "type": "c",
              "fadeOpen": false,
              "log": [],
              "message": "Information from this event"
            }
          ],
          "disable": false,
          "type": "c",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        }
      ]
    }
  ],
  "dataType": "init",
  "events": [
    {
      "id": "1556810385755",
      "name": "Search",
      "connects": [
        {
          "id": "1556810427350",
          "name": "Room Lists"
        }
      ],
      "logics": []
    },
    {
      "id": "1556810616422",
      "name": "Tokyo",
      "connects": [
        {
          "id": "1556810427350",
          "name": "Room Lists"
        }
      ],
      "logics": []
    },
    {
      "id": "1556810633583",
      "name": "Taipei",
      "connects": [
        {
          "id": "1556810427350",
          "name": "Room Lists"
        }
      ],
      "logics": []
    },
    {
      "id": "1556810661422",
      "name": "Berlin",
      "connects": [
        {
          "id": "1556810427350",
          "name": "Room Lists"
        }
      ],
      "logics": []
    },
    {
      "id": "1556810835685",
      "name": "event",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556810947954",
      "name": "Leave a review",
      "connects": [
        {
          "id": "1556810904324",
          "name": "Reviews"
        }
      ],
      "logics": []
    },
    {
      "id": "1556810983758",
      "name": "Score",
      "connects": [
        {
          "id": "1556810473682",
          "name": "Room Information"
        }
      ],
      "logics": []
    },
    {
      "id": "1556811153153",
      "name": "Book",
      "connects": [],
      "logics": [
        {
          "id": "1556810914019",
          "name": "Have you lived in this room?"
        }
      ]
    },
    {
      "id": "1556811202587",
      "name": "Save",
      "connects": [
        {
          "id": "1556810516365",
          "name": "Saved room lists"
        }
      ],
      "logics": []
    }
  ],
  "components": [
    {
      "id": "1556810427350",
      "name": "Room Lists",
      "parent": {
        "id": "a1"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556810473682",
      "name": "Room Information",
      "parent": {
        "id": "1556810427350"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556810516365",
      "name": "Saved room lists",
      "parent": {
        "id": "b3"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556810904324",
      "name": "Reviews",
      "parent": {
        "id": "1556810473682"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    }
  ],
  "logics": [
    {
      "id": "1556810914019",
      "name": "Have you lived in this room?",
      "disable": false
    }
  ],
  "clickNodeStatus": {
    "id": "a1",
    "name": "Airbnb ",
    "parent": null,
    "type": "p",
    "disable": false,
    "fadeOpen": false,
    "children": [
      {
        "id": "b1",
        "parent": {
          "id": "a1"
        },
        "name": "Recommended",
        "type": "p",
        "disable": false,
        "fadeOpen": false,
        "children": [
          {
            "id": "1556810616422",
            "name": "Tokyo",
            "parent": {
              "id": "b1"
            },
            "children": [],
            "disable": false,
            "type": "e",
            "fadeOpen": false,
            "log": [],
            "message": "Rooms in Tokyo"
          },
          {
            "id": "1556810633583",
            "name": "Taipei",
            "parent": {
              "id": "b1"
            },
            "children": [],
            "disable": false,
            "type": "e",
            "fadeOpen": false,
            "log": [],
            "message": "Rooms in Taipei"
          },
          {
            "id": "1556810661422",
            "name": "Berlin",
            "parent": {
              "id": "b1"
            },
            "children": [],
            "disable": false,
            "type": "e",
            "fadeOpen": false,
            "log": [],
            "message": "Rooms in Berlin"
          }
        ]
      },
      {
        "id": "b3",
        "parent": {
          "id": "a1"
        },
        "name": "Saved",
        "type": "p",
        "disable": false,
        "fadeOpen": false,
        "children": [
          {
            "id": "1556810516365",
            "name": "Saved room lists",
            "parent": {
              "id": "b3"
            },
            "children": [],
            "disable": false,
            "type": "c",
            "fadeOpen": false,
            "log": [],
            "message": "Information from this event"
          }
        ]
      },
      {
        "id": "1556810385755",
        "name": "Search",
        "parent": {
          "id": "a1"
        },
        "children": [],
        "disable": false,
        "type": "e",
        "fadeOpen": false,
        "log": [],
        "message": "Rooms based on the search"
      },
      {
        "id": "1556810427350",
        "name": "Room Lists",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1556810473682",
            "name": "Room Information",
            "parent": {
              "id": "1556810427350"
            },
            "children": [
              {
                "id": "1556810904324",
                "name": "Reviews",
                "parent": {
                  "id": "1556810473682"
                },
                "children": [
                  {
                    "id": "1556810914019",
                    "name": "Have you lived in this room?",
                    "parent": {
                      "id": "1556810904324"
                    },
                    "children": [
                      {
                        "id": "1556810947954",
                        "name": "Leave a review",
                        "parent": {
                          "id": "1556810914019"
                        },
                        "children": [],
                        "disable": false,
                        "type": "e",
                        "fadeOpen": false,
                        "log": [],
                        "message": "Add a review by past guest"
                      },
                      {
                        "id": "1556810983758",
                        "name": "Score",
                        "parent": {
                          "id": "1556810914019"
                        },
                        "children": [],
                        "disable": false,
                        "type": "e",
                        "fadeOpen": false,
                        "log": [],
                        "message": "Score by past guest"
                      }
                    ],
                    "disable": false,
                    "type": "l",
                    "fadeOpen": false,
                    "log": [],
                    "message": "Information from this event"
                  }
                ],
                "disable": false,
                "type": "c",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              },
              {
                "id": "1556811153153",
                "name": "Book",
                "parent": {
                  "id": "1556810473682"
                },
                "children": [],
                "disable": false,
                "type": "e",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              },
              {
                "id": "1556811202587",
                "name": "Save",
                "parent": {
                  "id": "1556810473682"
                },
                "children": [],
                "disable": false,
                "type": "e",
                "fadeOpen": false,
                "log": [],
                "message": "save a room"
              }
            ],
            "disable": false,
            "type": "c",
            "fadeOpen": false,
            "log": [],
            "message": "Information from this event"
          }
        ],
        "disable": false,
        "type": "c",
        "fadeOpen": false,
        "log": [],
        "message": "Information from this event"
      }
    ]
  },
  "connectModalOpen": false,
  "editNameOpen": false,
  "editMessageOpen": false,
  "deleteAlertOpen": false,
  "checkedComponent": [
    {
      "id": "1556810516365",
      "name": "Saved room lists"
    }
  ],
  "checkedLogics": [],
  "hoverId": false
}
