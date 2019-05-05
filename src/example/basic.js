export const basicSet = {
  "data": [
    {
      "id": "a1",
      "name": "Basic",
      "parent": null,
      "type": "p",
      "disable": false,
      "fadeOpen": false,
      "children": [
        {
          "id": "1557045819585",
          "name": "page",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1557045844427",
              "name": "page",
              "parent": {
                "id": "1557045819585"
              },
              "children": [
                {
                  "id": "1557045846635",
                  "name": "component2",
                  "parent": {
                    "id": "1557045844427"
                  },
                  "children": [],
                  "disable": false,
                  "type": "c",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                },
                {
                  "id": "1557045846812",
                  "name": "component3",
                  "parent": {
                    "id": "1557045844427"
                  },
                  "children": [],
                  "disable": false,
                  "type": "c",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                },
                {
                  "id": "1557045847015",
                  "name": "component4",
                  "parent": {
                    "id": "1557045844427"
                  },
                  "children": [],
                  "disable": false,
                  "type": "c",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                },
                {
                  "id": "1557045847207",
                  "name": "component5",
                  "parent": {
                    "id": "1557045844427"
                  },
                  "children": [],
                  "disable": false,
                  "type": "c",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                }
              ],
              "disable": false,
              "type": "p",
              "fadeOpen": false,
              "log": [],
              "message": "Information from this event"
            },
            {
              "id": "1557045900737",
              "name": "event",
              "parent": {
                "id": "1557045819585"
              },
              "children": [],
              "disable": false,
              "type": "e",
              "fadeOpen": false,
              "log": [],
              "message": "Information from this event"
            }
          ],
          "disable": false,
          "type": "p",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1557045821658",
          "name": "logic",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1557045855452",
              "name": "component1",
              "parent": {
                "id": "1557045821658"
              },
              "children": [
                {
                  "id": "1557045942232",
                  "name": "page",
                  "parent": {
                    "id": "1557045855452"
                  },
                  "children": [
                    {
                      "id": "1557045944701",
                      "name": "page",
                      "parent": {
                        "id": "1557045942232"
                      },
                      "children": [],
                      "disable": true,
                      "type": "p",
                      "fadeOpen": false,
                      "log": [],
                      "message": "Information from this event"
                    }
                  ],
                  "disable": true,
                  "type": "p",
                  "fadeOpen": false,
                  "log": [],
                  "message": "Information from this event"
                }
              ],
              "disable": true,
              "type": "c",
              "fadeOpen": false,
              "log": [],
              "message": "Information from this event"
            }
          ],
          "disable": true,
          "type": "l",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1557045825209",
          "name": "component6",
          "parent": {
            "id": "a1"
          },
          "children": [],
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
      "id": "1556810616422",
      "name": "Tokyo",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556810633583",
      "name": "Taipei",
      "connects": [],
      "logics": []
    },
    {
      "id": "1557045900737",
      "name": "event",
      "connects": [
        {
          "id": "1557045846635",
          "name": "component2"
        },
        {
          "id": "1557045846812",
          "name": "component3"
        },
        {
          "id": "1557045847015",
          "name": "component4"
        },
        {
          "id": "1557045847207",
          "name": "component5"
        },
        {
          "id": "1557045825209",
          "name": "component6"
        }
      ],
      "logics": [
        {
          "id": "1557045821658",
          "name": "logic"
        }
      ]
    }
  ],
  "components": [
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
      "id": "1557045825209",
      "name": "component6",
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
      "id": "1557045846635",
      "name": "component2",
      "parent": {
        "id": "1557045844427"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1557045846812",
      "name": "component3",
      "parent": {
        "id": "1557045844427"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1557045847015",
      "name": "component4",
      "parent": {
        "id": "1557045844427"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1557045847207",
      "name": "component5",
      "parent": {
        "id": "1557045844427"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1557045855452",
      "name": "component1",
      "parent": {
        "id": "1557045821658"
      },
      "children": [],
      "disable": true,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    }
  ],
  "logics": [
    {
      "id": "1557045821658",
      "name": "logic",
      "disable": false
    }
  ],
  "clickNodeStatus": {
    "id": "a1",
    "name": "Basic",
    "parent": null,
    "type": "p",
    "disable": false,
    "fadeOpen": false,
    "children": [
      {
        "id": "1557045819585",
        "name": "page",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1557045844427",
            "name": "page",
            "parent": {
              "id": "1557045819585"
            },
            "children": [
              {
                "id": "1557045846635",
                "name": "component2",
                "parent": {
                  "id": "1557045844427"
                },
                "children": [],
                "disable": false,
                "type": "c",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              },
              {
                "id": "1557045846812",
                "name": "component3",
                "parent": {
                  "id": "1557045844427"
                },
                "children": [],
                "disable": false,
                "type": "c",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              },
              {
                "id": "1557045847015",
                "name": "component4",
                "parent": {
                  "id": "1557045844427"
                },
                "children": [],
                "disable": false,
                "type": "c",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              },
              {
                "id": "1557045847207",
                "name": "component5",
                "parent": {
                  "id": "1557045844427"
                },
                "children": [],
                "disable": false,
                "type": "c",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              }
            ],
            "disable": false,
            "type": "p",
            "fadeOpen": false,
            "log": [],
            "message": "Information from this event"
          },
          {
            "id": "1557045900737",
            "name": "event",
            "parent": {
              "id": "1557045819585"
            },
            "children": [],
            "disable": false,
            "type": "e",
            "fadeOpen": false,
            "log": [],
            "message": "Information from this event"
          }
        ],
        "disable": false,
        "type": "p",
        "fadeOpen": false,
        "log": [],
        "message": "Information from this event"
      },
      {
        "id": "1557045821658",
        "name": "logic",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1557045855452",
            "name": "component1",
            "parent": {
              "id": "1557045821658"
            },
            "children": [
              {
                "id": "1557045942232",
                "name": "page",
                "parent": {
                  "id": "1557045855452"
                },
                "children": [
                  {
                    "id": "1557045944701",
                    "name": "page",
                    "parent": {
                      "id": "1557045942232"
                    },
                    "children": [],
                    "disable": true,
                    "type": "p",
                    "fadeOpen": false,
                    "log": [],
                    "message": "Information from this event"
                  }
                ],
                "disable": true,
                "type": "p",
                "fadeOpen": false,
                "log": [],
                "message": "Information from this event"
              }
            ],
            "disable": true,
            "type": "c",
            "fadeOpen": false,
            "log": [],
            "message": "Information from this event"
          }
        ],
        "disable": true,
        "type": "l",
        "fadeOpen": false,
        "log": [],
        "message": "Information from this event"
      },
      {
        "id": "1557045825209",
        "name": "component6",
        "parent": {
          "id": "a1"
        },
        "children": [],
        "disable": false,
        "type": "c",
        "fadeOpen": true,
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
      "id": "1557045846635",
      "name": "component2"
    },
    {
      "id": "1557045846812",
      "name": "component3"
    },
    {
      "id": "1557045847015",
      "name": "component4"
    },
    {
      "id": "1557045847207",
      "name": "component5"
    },
    {
      "id": "1557045825209",
      "name": "component6"
    }
  ],
  "checkedLogics": [
    {
      "id": "1557045821658",
      "name": "logic"
    }
  ],
  "hoverId": false
}
