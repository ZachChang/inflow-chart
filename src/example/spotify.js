export const spotifySet = {
  "data": [
    {
      "id": "a1",
      "name": "Spotify App",
      "parent": null,
      "type": "p",
      "disable": false,
      "fadeOpen": false,
      "children": [
        {
          "id": "1556720323717",
          "name": "Now Playing",
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
          "id": "1556720401957",
          "name": "Discover Weekly",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1556720429721",
              "name": "Music lists",
              "parent": {
                "id": "1556720401957"
              },
              "children": [
                {
                  "id": "1556720440558",
                  "name": "Listen",
                  "parent": {
                    "id": "1556720429721"
                  },
                  "children": [],
                  "disable": false,
                  "type": "e",
                  "fadeOpen": false,
                  "log": [],
                  "message": "music from Discover Weekly"
                },
                {
                  "id": "1556720883007",
                  "name": "Sign Up?",
                  "parent": {
                    "id": "1556720429721"
                  },
                  "children": [
                    {
                      "id": "1556720893147",
                      "name": "Save",
                      "parent": {
                        "id": "1556720883007"
                      },
                      "children": [],
                      "disable": true,
                      "type": "e",
                      "fadeOpen": false,
                      "log": [],
                      "message": "Save from Discover Weekly"
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
            }
          ],
          "disable": false,
          "type": "p",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1556720499336",
          "name": "Daily Mix",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1556720980495",
              "name": "Music lists",
              "parent": {
                "id": "1556720499336"
              },
              "children": [
                {
                  "id": "1556720993014",
                  "name": "Listen",
                  "parent": {
                    "id": "1556720980495"
                  },
                  "children": [],
                  "disable": false,
                  "type": "e",
                  "fadeOpen": false,
                  "log": [],
                  "message": "music from Daily Mix"
                },
                {
                  "id": "1556720995088",
                  "name": "Sign Up?",
                  "parent": {
                    "id": "1556720980495"
                  },
                  "children": [
                    {
                      "id": "1556721017087",
                      "name": "Save",
                      "parent": {
                        "id": "1556720995088"
                      },
                      "children": [],
                      "disable": true,
                      "type": "e",
                      "fadeOpen": false,
                      "log": [],
                      "message": "Save from Daily Mix"
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
            }
          ],
          "disable": false,
          "type": "p",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1556721237342",
          "name": "Library",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1556721269277",
              "name": "My songs",
              "parent": {
                "id": "1556721237342"
              },
              "children": [
                {
                  "id": "1556721404692",
                  "name": "Listen",
                  "parent": {
                    "id": "1556721269277"
                  },
                  "children": [],
                  "disable": false,
                  "type": "e",
                  "fadeOpen": false,
                  "log": [],
                  "message": "music from my library"
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
          "type": "p",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1556721539218",
          "name": "Recently played",
          "parent": {
            "id": "a1"
          },
          "children": [
            {
              "id": "1556721583989",
              "name": "Listen",
              "parent": {
                "id": "1556721539218"
              },
              "children": [],
              "disable": false,
              "type": "e",
              "fadeOpen": false,
              "log": [],
              "message": "music from recently played"
            }
          ],
          "disable": false,
          "type": "c",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        },
        {
          "id": "1556721612172",
          "name": "Sign up",
          "parent": {
            "id": "a1"
          },
          "children": [],
          "disable": false,
          "type": "e",
          "fadeOpen": false,
          "log": [],
          "message": "Information from this event"
        }
      ]
    }
  ],
  "dataType": "spotify",
  "events": [
    {
      "id": "1556640830688",
      "name": "click Recommended",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556640832674",
      "name": "click Top-rated",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556713394296",
      "name": "event",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556714632259",
      "name": "event",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556714634415",
      "name": "event",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556717478314",
      "name": "event",
      "connects": [],
      "logics": []
    },
    {
      "id": "1556720440558",
      "name": "Listen",
      "connects": [
        {
          "id": "1556720323717",
          "name": "Now Playing"
        },
        {
          "id": "1556720980495",
          "name": "Music lists"
        },
        {
          "id": "1556721539218",
          "name": "Recently played"
        }
      ],
      "logics": []
    },
    {
      "id": "1556720893147",
      "name": "Save",
      "connects": [
        {
          "id": "1556721269277",
          "name": "My songs"
        }
      ],
      "logics": []
    },
    {
      "id": "1556720993014",
      "name": "Listen",
      "connects": [
        {
          "id": "1556720323717",
          "name": "Now Playing"
        },
        {
          "id": "1556720980495",
          "name": "Music lists"
        },
        {
          "id": "1556721539218",
          "name": "Recently played"
        }
      ],
      "logics": []
    },
    {
      "id": "1556721017087",
      "name": "Save",
      "connects": [
        {
          "id": "1556721269277",
          "name": "My songs"
        }
      ],
      "logics": []
    },
    {
      "id": "1556721404692",
      "name": "Listen",
      "connects": [
        {
          "id": "1556720323717",
          "name": "Now Playing"
        },
        {
          "id": "1556721539218",
          "name": "Recently played"
        }
      ],
      "logics": []
    },
    {
      "id": "1556721583989",
      "name": "Listen",
      "connects": [
        {
          "id": "1556720323717",
          "name": "Now Playing"
        }
      ],
      "logics": []
    },
    {
      "id": "1556721612172",
      "name": "Sign up",
      "connects": [],
      "logics": [
        {
          "id": "1556720883007",
          "name": "Sign Up?"
        },
        {
          "id": "1556720995088",
          "name": "Sign Up?"
        }
      ]
    }
  ],
  "components": [
    {
      "id": "1556720323717",
      "name": "Now Playing",
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
      "id": "1556720429721",
      "name": "Music lists",
      "parent": {
        "id": "1556720401957"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556720980495",
      "name": "Music lists",
      "parent": {
        "id": "1556720499336"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556721269277",
      "name": "My songs",
      "parent": {
        "id": "1556721237342"
      },
      "children": [],
      "disable": false,
      "type": "c",
      "fadeOpen": false,
      "log": [],
      "message": "Information from this event"
    },
    {
      "id": "1556721539218",
      "name": "Recently played",
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
  ],
  "logics": [
    {
      "id": "1556720883007",
      "name": "Sign Up?",
      "disable": false
    },
    {
      "id": "1556720995088",
      "name": "Sign Up?",
      "disable": false
    }
  ],
  "clickNodeStatus": {
    "id": "a1",
    "name": "Spotify App",
    "parent": null,
    "type": "p",
    "disable": false,
    "fadeOpen": false,
    "children": [
      {
        "id": "1556720323717",
        "name": "Now Playing",
        "parent": {
          "id": "a1"
        },
        "children": [],
        "disable": false,
        "type": "c",
        "fadeOpen": true,
        "log": [],
        "message": "Information from this event"
      },
      {
        "id": "1556720401957",
        "name": "Discover Weekly",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1556720429721",
            "name": "Music lists",
            "parent": {
              "id": "1556720401957"
            },
            "children": [
              {
                "id": "1556720440558",
                "name": "Listen",
                "parent": {
                  "id": "1556720429721"
                },
                "children": [],
                "disable": false,
                "type": "e",
                "fadeOpen": false,
                "log": [],
                "message": "music from Discover Weekly"
              },
              {
                "id": "1556720883007",
                "name": "Sign Up?",
                "parent": {
                  "id": "1556720429721"
                },
                "children": [
                  {
                    "id": "1556720893147",
                    "name": "Save",
                    "parent": {
                      "id": "1556720883007"
                    },
                    "children": [],
                    "disable": true,
                    "type": "e",
                    "fadeOpen": false,
                    "log": [],
                    "message": "Save from Discover Weekly"
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
          }
        ],
        "disable": false,
        "type": "p",
        "fadeOpen": false,
        "log": [],
        "message": "Information from this event"
      },
      {
        "id": "1556720499336",
        "name": "Daily Mix",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1556720980495",
            "name": "Music lists",
            "parent": {
              "id": "1556720499336"
            },
            "children": [
              {
                "id": "1556720993014",
                "name": "Listen",
                "parent": {
                  "id": "1556720980495"
                },
                "children": [],
                "disable": false,
                "type": "e",
                "fadeOpen": false,
                "log": [],
                "message": "music from Daily Mix"
              },
              {
                "id": "1556720995088",
                "name": "Sign Up?",
                "parent": {
                  "id": "1556720980495"
                },
                "children": [
                  {
                    "id": "1556721017087",
                    "name": "Save",
                    "parent": {
                      "id": "1556720995088"
                    },
                    "children": [],
                    "disable": true,
                    "type": "e",
                    "fadeOpen": false,
                    "log": [],
                    "message": "Save from Daily Mix"
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
            "fadeOpen": true,
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
        "id": "1556721237342",
        "name": "Library",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1556721269277",
            "name": "My songs",
            "parent": {
              "id": "1556721237342"
            },
            "children": [
              {
                "id": "1556721404692",
                "name": "Listen",
                "parent": {
                  "id": "1556721269277"
                },
                "children": [],
                "disable": false,
                "type": "e",
                "fadeOpen": false,
                "log": [],
                "message": "music from my library"
              }
            ],
            "disable": false,
            "type": "c",
            "fadeOpen": true,
            "log": [
              "Information from this event",
              "Save from Discover Weekly",
              "Information from this event",
              "Information from this event",
              "Save from Discover Weekly",
              "Save from Daily Mix",
              "Save from Discover Weekly",
              "Save from Daily Mix"
            ],
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
        "id": "1556721539218",
        "name": "Recently played",
        "parent": {
          "id": "a1"
        },
        "children": [
          {
            "id": "1556721583989",
            "name": "Listen",
            "parent": {
              "id": "1556721539218"
            },
            "children": [],
            "disable": false,
            "type": "e",
            "fadeOpen": false,
            "log": [],
            "message": "music from recently played"
          }
        ],
        "disable": false,
        "type": "c",
        "fadeOpen": true,
        "log": [
          "music from Discover Weekly"
        ],
        "message": "Information from this event"
      },
      {
        "id": "1556721612172",
        "name": "Sign up",
        "parent": {
          "id": "a1"
        },
        "children": [],
        "disable": false,
        "type": "e",
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
      "id": "1556720323717",
      "name": "Now Playing"
    },
    {
      "id": "1556720980495",
      "name": "Music lists"
    },
    {
      "id": "1556721539218",
      "name": "Recently played"
    }
  ],
  "checkedLogics": [],
  "hoverId": false
};
