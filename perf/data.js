var benchmarkData = {
  "a": {
    "date": "2018-04-25T14:52:30+00:00",
    "commit": "25749ad66de71ffb46e6b04fb0cccf1ae4fc5ed5",
    "data": {
      "crates.io": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 15.523083725
              },
              {
                "name": "max-rss",
                "cnt": 788232
              },
              {
                "name": "cycles:u",
                "cnt": 127931671815
              },
              {
                "name": "task-clock",
                "cnt": 33950.12932
              },
              {
                "name": "cpu-clock",
                "cnt": 33950.153039
              },
              {
                "name": "faults",
                "cnt": 376709
              },
              {
                "name": "instructions:u",
                "cnt": 135755296516
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          135755296516
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 144678559833
              },
              {
                "name": "faults",
                "cnt": 407263
              },
              {
                "name": "cpu-clock",
                "cnt": 38480.489613
              },
              {
                "name": "wall-time",
                "cnt": 17.661038786
              },
              {
                "name": "max-rss",
                "cnt": 917264
              },
              {
                "name": "instructions:u",
                "cnt": 150863473470
              },
              {
                "name": "task-clock",
                "cnt": 38480.466148
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          150863473470
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 16639561743
              },
              {
                "name": "instructions:u",
                "cnt": 20625001529
              },
              {
                "name": "task-clock",
                "cnt": 4505.020746
              },
              {
                "name": "max-rss",
                "cnt": 853884
              },
              {
                "name": "faults",
                "cnt": 184282
              },
              {
                "name": "cpu-clock",
                "cnt": 4504.880138
              },
              {
                "name": "wall-time",
                "cnt": 4.408695177
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          20625001529
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5789.049363
              },
              {
                "name": "max-rss",
                "cnt": 880388
              },
              {
                "name": "wall-time",
                "cnt": 5.138869787
              },
              {
                "name": "cycles:u",
                "cnt": 21536033445
              },
              {
                "name": "task-clock",
                "cnt": 5789.229037
              },
              {
                "name": "faults",
                "cnt": 199466
              },
              {
                "name": "instructions:u",
                "cnt": 26137545918
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          26137545918
        ]
      ],
      "syn": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 13894123408
              },
              {
                "name": "task-clock",
                "cnt": 3714.569674
              },
              {
                "name": "wall-time",
                "cnt": 1.74992889
              },
              {
                "name": "cpu-clock",
                "cnt": 3714.572637
              },
              {
                "name": "instructions:u",
                "cnt": 14330144154
              },
              {
                "name": "faults",
                "cnt": 53034
              },
              {
                "name": "max-rss",
                "cnt": 249284
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          14330144154
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 18636493150
              },
              {
                "name": "cycles:u",
                "cnt": 15829225014
              },
              {
                "name": "task-clock",
                "cnt": 4192.979508
              },
              {
                "name": "cpu-clock",
                "cnt": 4192.981134
              },
              {
                "name": "max-rss",
                "cnt": 249176
              },
              {
                "name": "wall-time",
                "cnt": 2.246929615
              },
              {
                "name": "faults",
                "cnt": 53225
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          18636493150
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 15945921739
              },
              {
                "name": "wall-time",
                "cnt": 2.18923104
              },
              {
                "name": "faults",
                "cnt": 66565
              },
              {
                "name": "max-rss",
                "cnt": 275196
              },
              {
                "name": "task-clock",
                "cnt": 4259.930653
              },
              {
                "name": "instructions:u",
                "cnt": 17415965394
              },
              {
                "name": "cpu-clock",
                "cnt": 4259.949613
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          17415965394
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 41542
              },
              {
                "name": "max-rss",
                "cnt": 257676
              },
              {
                "name": "instructions:u",
                "cnt": 3079187845
              },
              {
                "name": "task-clock",
                "cnt": 681.679998
              },
              {
                "name": "cpu-clock",
                "cnt": 681.643603
              },
              {
                "name": "cycles:u",
                "cnt": 2416954935
              },
              {
                "name": "wall-time",
                "cnt": 0.661953829
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3079187845
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.749355103
              },
              {
                "name": "task-clock",
                "cnt": 871.857581
              },
              {
                "name": "max-rss",
                "cnt": 276452
              },
              {
                "name": "cycles:u",
                "cnt": 3111121118
              },
              {
                "name": "faults",
                "cnt": 45037
              },
              {
                "name": "cpu-clock",
                "cnt": 871.814774
              },
              {
                "name": "instructions:u",
                "cnt": 3799365844
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3799365844
        ],
        [
          "patched incremental: nll",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 4827.309266
              },
              {
                "name": "instructions:u",
                "cnt": 21162611124
              },
              {
                "name": "max-rss",
                "cnt": 302412
              },
              {
                "name": "wall-time",
                "cnt": 2.586019171
              },
              {
                "name": "cpu-clock",
                "cnt": 4827.329999
              },
              {
                "name": "faults",
                "cnt": 73809
              },
              {
                "name": "cycles:u",
                "cnt": 18122247813
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          21162611124
        ]
      ],
      "coercions": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 69799
              },
              {
                "name": "task-clock",
                "cnt": 1593.463142
              },
              {
                "name": "instructions:u",
                "cnt": 10681066423
              },
              {
                "name": "max-rss",
                "cnt": 213736
              },
              {
                "name": "wall-time",
                "cnt": 1.581102846
              },
              {
                "name": "cycles:u",
                "cnt": 5873223835
              },
              {
                "name": "cpu-clock",
                "cnt": 1593.459858
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          10681066423
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1768.865378
              },
              {
                "name": "wall-time",
                "cnt": 1.730611682
              },
              {
                "name": "max-rss",
                "cnt": 215188
              },
              {
                "name": "instructions:u",
                "cnt": 12388048835
              },
              {
                "name": "cycles:u",
                "cnt": 6539407399
              },
              {
                "name": "cpu-clock",
                "cnt": 1768.861197
              },
              {
                "name": "faults",
                "cnt": 73463
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          12388048835
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 574.987404
              },
              {
                "name": "instructions:u",
                "cnt": 3424141197
              },
              {
                "name": "cycles:u",
                "cnt": 1909207308
              },
              {
                "name": "faults",
                "cnt": 40507
              },
              {
                "name": "task-clock",
                "cnt": 575.007142
              },
              {
                "name": "max-rss",
                "cnt": 161268
              },
              {
                "name": "wall-time",
                "cnt": 0.57717446
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3424141197
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 66624
              },
              {
                "name": "cpu-clock",
                "cnt": 901.950356
              },
              {
                "name": "cycles:u",
                "cnt": 3089678751
              },
              {
                "name": "task-clock",
                "cnt": 901.954018
              },
              {
                "name": "max-rss",
                "cnt": 217988
              },
              {
                "name": "instructions:u",
                "cnt": 5219466641
              },
              {
                "name": "wall-time",
                "cnt": 0.834370916
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          5219466641
        ],
        [
          "patched incremental: add static arr item",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.731433862
              },
              {
                "name": "faults",
                "cnt": 74461
              },
              {
                "name": "max-rss",
                "cnt": 205560
              },
              {
                "name": "instructions:u",
                "cnt": 12387561511
              },
              {
                "name": "cycles:u",
                "cnt": 6545898940
              },
              {
                "name": "cpu-clock",
                "cnt": 1774.457931
              },
              {
                "name": "task-clock",
                "cnt": 1774.451139
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          12387561511
        ]
      ],
      "tokio-webpush-simple": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 107911
              },
              {
                "name": "wall-time",
                "cnt": 2.836962725
              },
              {
                "name": "cycles:u",
                "cnt": 18706738594
              },
              {
                "name": "max-rss",
                "cnt": 283720
              },
              {
                "name": "instructions:u",
                "cnt": 19809565043
              },
              {
                "name": "task-clock",
                "cnt": 5126.7939
              },
              {
                "name": "cpu-clock",
                "cnt": 5126.799445
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          19809565043
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 108022
              },
              {
                "name": "cycles:u",
                "cnt": 19199835165
              },
              {
                "name": "max-rss",
                "cnt": 283304
              },
              {
                "name": "cpu-clock",
                "cnt": 5248.901057
              },
              {
                "name": "task-clock",
                "cnt": 5248.869229
              },
              {
                "name": "wall-time",
                "cnt": 2.942835177
              },
              {
                "name": "instructions:u",
                "cnt": 20559530107
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          20559530107
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 337688
              },
              {
                "name": "faults",
                "cnt": 134175
              },
              {
                "name": "cycles:u",
                "cnt": 22507718007
              },
              {
                "name": "wall-time",
                "cnt": 3.304306028
              },
              {
                "name": "task-clock",
                "cnt": 6197.754865
              },
              {
                "name": "instructions:u",
                "cnt": 23693376213
              },
              {
                "name": "cpu-clock",
                "cnt": 6197.79468
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          23693376213
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 96734
              },
              {
                "name": "task-clock",
                "cnt": 1603.977669
              },
              {
                "name": "instructions:u",
                "cnt": 6189232649
              },
              {
                "name": "max-rss",
                "cnt": 311888
              },
              {
                "name": "cpu-clock",
                "cnt": 1603.937236
              },
              {
                "name": "wall-time",
                "cnt": 1.571345646
              },
              {
                "name": "cycles:u",
                "cnt": 5161951961
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          6189232649
        ],
        [
          "patched incremental: minor change",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 5994.071835
              },
              {
                "name": "faults",
                "cnt": 136190
              },
              {
                "name": "max-rss",
                "cnt": 344424
              },
              {
                "name": "instructions:u",
                "cnt": 21956507461
              },
              {
                "name": "cpu-clock",
                "cnt": 5994.056215
              },
              {
                "name": "wall-time",
                "cnt": 2.956521544
              },
              {
                "name": "cycles:u",
                "cnt": 21683521953
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          21956507461
        ]
      ],
      "issue-46449-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 119.062315
              },
              {
                "name": "wall-time",
                "cnt": 0.125404253
              },
              {
                "name": "instructions:u",
                "cnt": 488957723
              },
              {
                "name": "faults",
                "cnt": 7860
              },
              {
                "name": "max-rss",
                "cnt": 125860
              },
              {
                "name": "cycles:u",
                "cnt": 408169960
              },
              {
                "name": "cpu-clock",
                "cnt": 119.061926
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          488957723
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 126048
              },
              {
                "name": "cycles:u",
                "cnt": 409970614
              },
              {
                "name": "faults",
                "cnt": 7852
              },
              {
                "name": "instructions:u",
                "cnt": 496833212
              },
              {
                "name": "task-clock",
                "cnt": 120.346681
              },
              {
                "name": "wall-time",
                "cnt": 0.12652569
              },
              {
                "name": "cpu-clock",
                "cnt": 120.346295
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          496833212
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 9574
              },
              {
                "name": "cycles:u",
                "cnt": 466690777
              },
              {
                "name": "task-clock",
                "cnt": 136.342093
              },
              {
                "name": "instructions:u",
                "cnt": 571208790
              },
              {
                "name": "wall-time",
                "cnt": 0.142191437
              },
              {
                "name": "max-rss",
                "cnt": 134388
              },
              {
                "name": "cpu-clock",
                "cnt": 136.341276
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          571208790
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 476845026
              },
              {
                "name": "faults",
                "cnt": 9713
              },
              {
                "name": "task-clock",
                "cnt": 120.171606
              },
              {
                "name": "cpu-clock",
                "cnt": 120.180357
              },
              {
                "name": "max-rss",
                "cnt": 133136
              },
              {
                "name": "cycles:u",
                "cnt": 393145067
              },
              {
                "name": "wall-time",
                "cnt": 0.124911224
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          476845026
        ],
        [
          "patched incremental: io error 6144-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 135420
              },
              {
                "name": "cycles:u",
                "cnt": 435912547
              },
              {
                "name": "task-clock",
                "cnt": 129.402004
              },
              {
                "name": "faults",
                "cnt": 9777
              },
              {
                "name": "instructions:u",
                "cnt": 531502046
              },
              {
                "name": "wall-time",
                "cnt": 0.134183053
              },
              {
                "name": "cpu-clock",
                "cnt": 129.410747
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          531502046
        ],
        [
          "patched incremental: u32 3072-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 531028151
              },
              {
                "name": "faults",
                "cnt": 9792
              },
              {
                "name": "task-clock",
                "cnt": 128.516888
              },
              {
                "name": "cpu-clock",
                "cnt": 128.515986
              },
              {
                "name": "cycles:u",
                "cnt": 432875571
              },
              {
                "name": "max-rss",
                "cnt": 135232
              },
              {
                "name": "wall-time",
                "cnt": 0.132930502
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          531028151
        ],
        [
          "patched incremental: u8 3072-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 118.401573
              },
              {
                "name": "instructions:u",
                "cnt": 477766886
              },
              {
                "name": "wall-time",
                "cnt": 0.122902727
              },
              {
                "name": "cpu-clock",
                "cnt": 118.400582
              },
              {
                "name": "faults",
                "cnt": 9723
              },
              {
                "name": "cycles:u",
                "cnt": 393541858
              },
              {
                "name": "max-rss",
                "cnt": 134516
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          477766886
        ],
        [
          "patched incremental: empty 3072-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 531195727
              },
              {
                "name": "cpu-clock",
                "cnt": 128.475023
              },
              {
                "name": "task-clock",
                "cnt": 128.475388
              },
              {
                "name": "cycles:u",
                "cnt": 433430412
              },
              {
                "name": "wall-time",
                "cnt": 0.132929078
              },
              {
                "name": "max-rss",
                "cnt": 135112
              },
              {
                "name": "faults",
                "cnt": 9774
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          531195727
        ],
        [
          "patched incremental: static str 6144-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 437152693
              },
              {
                "name": "wall-time",
                "cnt": 0.133651974
              },
              {
                "name": "cpu-clock",
                "cnt": 129.134754
              },
              {
                "name": "max-rss",
                "cnt": 134860
              },
              {
                "name": "instructions:u",
                "cnt": 532164724
              },
              {
                "name": "faults",
                "cnt": 9770
              },
              {
                "name": "task-clock",
                "cnt": 129.134603
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          532164724
        ]
      ],
      "helloworld": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 127928
              },
              {
                "name": "wall-time",
                "cnt": 0.260830133
              },
              {
                "name": "cpu-clock",
                "cnt": 265.674251
              },
              {
                "name": "faults",
                "cnt": 19668
              },
              {
                "name": "task-clock",
                "cnt": 265.678702
              },
              {
                "name": "instructions:u",
                "cnt": 1239712102
              },
              {
                "name": "cycles:u",
                "cnt": 831085583
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1239712102
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 268.197375
              },
              {
                "name": "faults",
                "cnt": 19648
              },
              {
                "name": "max-rss",
                "cnt": 127644
              },
              {
                "name": "instructions:u",
                "cnt": 1240752600
              },
              {
                "name": "cycles:u",
                "cnt": 836803073
              },
              {
                "name": "wall-time",
                "cnt": 0.260905908
              },
              {
                "name": "task-clock",
                "cnt": 268.18296
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1240752600
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 134724
              },
              {
                "name": "task-clock",
                "cnt": 279.218297
              },
              {
                "name": "cycles:u",
                "cnt": 873993361
              },
              {
                "name": "faults",
                "cnt": 21167
              },
              {
                "name": "instructions:u",
                "cnt": 1297435470
              },
              {
                "name": "cpu-clock",
                "cnt": 279.213046
              },
              {
                "name": "wall-time",
                "cnt": 0.272851439
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1297435470
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 773259427
              },
              {
                "name": "wall-time",
                "cnt": 0.251882297
              },
              {
                "name": "task-clock",
                "cnt": 250.163255
              },
              {
                "name": "faults",
                "cnt": 19776
              },
              {
                "name": "max-rss",
                "cnt": 112472
              },
              {
                "name": "cpu-clock",
                "cnt": 250.153647
              },
              {
                "name": "instructions:u",
                "cnt": 1180917915
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1180917915
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 134780
              },
              {
                "name": "faults",
                "cnt": 21278
              },
              {
                "name": "task-clock",
                "cnt": 276.964311
              },
              {
                "name": "cycles:u",
                "cnt": 866284936
              },
              {
                "name": "wall-time",
                "cnt": 0.269184192
              },
              {
                "name": "instructions:u",
                "cnt": 1275456237
              },
              {
                "name": "cpu-clock",
                "cnt": 276.959772
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1275456237
        ]
      ],
      "serde": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 56318
              },
              {
                "name": "cpu-clock",
                "cnt": 6621.209223
              },
              {
                "name": "max-rss",
                "cnt": 303176
              },
              {
                "name": "cycles:u",
                "cnt": 26005148336
              },
              {
                "name": "task-clock",
                "cnt": 6621.202384
              },
              {
                "name": "wall-time",
                "cnt": 6.467051828
              },
              {
                "name": "instructions:u",
                "cnt": 39338974230
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          39338974230
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 11956.560354
              },
              {
                "name": "max-rss",
                "cnt": 310628
              },
              {
                "name": "faults",
                "cnt": 58037
              },
              {
                "name": "instructions:u",
                "cnt": 87234910393
              },
              {
                "name": "task-clock",
                "cnt": 11956.534079
              },
              {
                "name": "cycles:u",
                "cnt": 47230238045
              },
              {
                "name": "wall-time",
                "cnt": 11.792100303
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          87234910393
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 82707
              },
              {
                "name": "cpu-clock",
                "cnt": 7624.645052
              },
              {
                "name": "wall-time",
                "cnt": 7.433165974
              },
              {
                "name": "instructions:u",
                "cnt": 44750900636
              },
              {
                "name": "max-rss",
                "cnt": 397388
              },
              {
                "name": "cycles:u",
                "cnt": 29844930920
              },
              {
                "name": "task-clock",
                "cnt": 7624.634268
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          44750900636
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1721.678673
              },
              {
                "name": "instructions:u",
                "cnt": 8156168329
              },
              {
                "name": "max-rss",
                "cnt": 385400
              },
              {
                "name": "cpu-clock",
                "cnt": 1721.668147
              },
              {
                "name": "faults",
                "cnt": 82025
              },
              {
                "name": "wall-time",
                "cnt": 1.68695692
              },
              {
                "name": "cycles:u",
                "cnt": 6380490600
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          8156168329
        ]
      ],
      "deep-vector-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 22079825013
              },
              {
                "name": "wall-time",
                "cnt": 4.102248096
              },
              {
                "name": "cycles:u",
                "cnt": 15216835889
              },
              {
                "name": "cpu-clock",
                "cnt": 4172.171267
              },
              {
                "name": "task-clock",
                "cnt": 4172.177003
              },
              {
                "name": "faults",
                "cnt": 322244
              },
              {
                "name": "max-rss",
                "cnt": 441708
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          22079825013
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 22359099471
              },
              {
                "name": "wall-time",
                "cnt": 4.159050692
              },
              {
                "name": "max-rss",
                "cnt": 441468
              },
              {
                "name": "cycles:u",
                "cnt": 15266687148
              },
              {
                "name": "faults",
                "cnt": 330411
              },
              {
                "name": "task-clock",
                "cnt": 4224.191841
              },
              {
                "name": "cpu-clock",
                "cnt": 4224.20751
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          22359099471
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4322.602738
              },
              {
                "name": "max-rss",
                "cnt": 450124
              },
              {
                "name": "task-clock",
                "cnt": 4322.602112
              },
              {
                "name": "faults",
                "cnt": 321143
              },
              {
                "name": "cycles:u",
                "cnt": 15702999953
              },
              {
                "name": "instructions:u",
                "cnt": 23722681880
              },
              {
                "name": "wall-time",
                "cnt": 4.257774076
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          23722681880
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 233520
              },
              {
                "name": "task-clock",
                "cnt": 928.646682
              },
              {
                "name": "instructions:u",
                "cnt": 5373221882
              },
              {
                "name": "faults",
                "cnt": 92552
              },
              {
                "name": "cycles:u",
                "cnt": 3180256766
              },
              {
                "name": "wall-time",
                "cnt": 0.928465597
              },
              {
                "name": "cpu-clock",
                "cnt": 928.635248
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          5373221882
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 451120
              },
              {
                "name": "cpu-clock",
                "cnt": 4363.735029
              },
              {
                "name": "wall-time",
                "cnt": 4.295597204
              },
              {
                "name": "faults",
                "cnt": 323712
              },
              {
                "name": "instructions:u",
                "cnt": 23990798179
              },
              {
                "name": "task-clock",
                "cnt": 4363.725786
              },
              {
                "name": "cycles:u",
                "cnt": 15884588613
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          23990798179
        ],
        [
          "patched incremental: add vec item-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4330.712881
              },
              {
                "name": "task-clock",
                "cnt": 4330.704377
              },
              {
                "name": "max-rss",
                "cnt": 451584
              },
              {
                "name": "cycles:u",
                "cnt": 15772187877
              },
              {
                "name": "faults",
                "cnt": 324032
              },
              {
                "name": "wall-time",
                "cnt": 4.262769481
              },
              {
                "name": "instructions:u",
                "cnt": 23942779851
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          23942779851
        ]
      ],
      "encoding-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 27377780667
              },
              {
                "name": "wall-time",
                "cnt": 1.993357111
              },
              {
                "name": "instructions:u",
                "cnt": 24094963170
              },
              {
                "name": "faults",
                "cnt": 39331
              },
              {
                "name": "task-clock",
                "cnt": 7266.817143
              },
              {
                "name": "cpu-clock",
                "cnt": 7266.823106
              },
              {
                "name": "max-rss",
                "cnt": 218528
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          24094963170
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 7573.816466
              },
              {
                "name": "wall-time",
                "cnt": 2.272187993
              },
              {
                "name": "instructions:u",
                "cnt": 26660809715
              },
              {
                "name": "max-rss",
                "cnt": 219704
              },
              {
                "name": "faults",
                "cnt": 41873
              },
              {
                "name": "cycles:u",
                "cnt": 28571074634
              },
              {
                "name": "task-clock",
                "cnt": 7573.789887
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          26660809715
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 23335154620
              },
              {
                "name": "wall-time",
                "cnt": 1.840046507
              },
              {
                "name": "cpu-clock",
                "cnt": 6213.03341
              },
              {
                "name": "faults",
                "cnt": 45451
              },
              {
                "name": "max-rss",
                "cnt": 253084
              },
              {
                "name": "instructions:u",
                "cnt": 20597041636
              },
              {
                "name": "task-clock",
                "cnt": 6213.028453
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          20597041636
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1350424313
              },
              {
                "name": "faults",
                "cnt": 25801
              },
              {
                "name": "cpu-clock",
                "cnt": 387.486815
              },
              {
                "name": "instructions:u",
                "cnt": 1753641935
              },
              {
                "name": "wall-time",
                "cnt": 0.375852812
              },
              {
                "name": "task-clock",
                "cnt": 387.515353
              },
              {
                "name": "max-rss",
                "cnt": 199324
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1753641935
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 489.061707
              },
              {
                "name": "faults",
                "cnt": 26400
              },
              {
                "name": "max-rss",
                "cnt": 203036
              },
              {
                "name": "instructions:u",
                "cnt": 2179066033
              },
              {
                "name": "cycles:u",
                "cnt": 1731936123
              },
              {
                "name": "task-clock",
                "cnt": 489.073088
              },
              {
                "name": "wall-time",
                "cnt": 0.441514753
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2179066033
        ]
      ],
      "hyper": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4837.822131
              },
              {
                "name": "wall-time",
                "cnt": 2.581045757
              },
              {
                "name": "max-rss",
                "cnt": 268080
              },
              {
                "name": "instructions:u",
                "cnt": 18889527016
              },
              {
                "name": "task-clock",
                "cnt": 4837.817026
              },
              {
                "name": "cycles:u",
                "cnt": 18199276173
              },
              {
                "name": "faults",
                "cnt": 66906
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          18889527016
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5193.989757
              },
              {
                "name": "faults",
                "cnt": 66575
              },
              {
                "name": "cycles:u",
                "cnt": 19678293455
              },
              {
                "name": "instructions:u",
                "cnt": 22348736079
              },
              {
                "name": "task-clock",
                "cnt": 5193.965475
              },
              {
                "name": "wall-time",
                "cnt": 2.99477471
              },
              {
                "name": "max-rss",
                "cnt": 270916
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          22348736079
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 6005.311641
              },
              {
                "name": "cycles:u",
                "cnt": 22457504423
              },
              {
                "name": "instructions:u",
                "cnt": 22935518633
              },
              {
                "name": "wall-time",
                "cnt": 3.1423508
              },
              {
                "name": "faults",
                "cnt": 81010
              },
              {
                "name": "max-rss",
                "cnt": 336816
              },
              {
                "name": "cpu-clock",
                "cnt": 6005.364967
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          22935518633
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 4119085188
              },
              {
                "name": "faults",
                "cnt": 52052
              },
              {
                "name": "cpu-clock",
                "cnt": 958.436632
              },
              {
                "name": "task-clock",
                "cnt": 958.517304
              },
              {
                "name": "wall-time",
                "cnt": 0.91579794
              },
              {
                "name": "max-rss",
                "cnt": 301144
              },
              {
                "name": "cycles:u",
                "cnt": 3390352422
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          4119085188
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.91547262
              },
              {
                "name": "cycles:u",
                "cnt": 3437265877
              },
              {
                "name": "faults",
                "cnt": 51482
              },
              {
                "name": "instructions:u",
                "cnt": 4211399583
              },
              {
                "name": "task-clock",
                "cnt": 970.856553
              },
              {
                "name": "max-rss",
                "cnt": 305664
              },
              {
                "name": "cpu-clock",
                "cnt": 970.793578
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4211399583
        ]
      ],
      "inflate": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 3812.191537
              },
              {
                "name": "faults",
                "cnt": 157574
              },
              {
                "name": "max-rss",
                "cnt": 287776
              },
              {
                "name": "task-clock",
                "cnt": 3812.18983
              },
              {
                "name": "instructions:u",
                "cnt": 22820412218
              },
              {
                "name": "cycles:u",
                "cnt": 14484253258
              },
              {
                "name": "wall-time",
                "cnt": 3.591751468
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          22820412218
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 19.26183954
              },
              {
                "name": "faults",
                "cnt": 307688
              },
              {
                "name": "cpu-clock",
                "cnt": 19490.010789
              },
              {
                "name": "cycles:u",
                "cnt": 76501959589
              },
              {
                "name": "instructions:u",
                "cnt": 173436502245
              },
              {
                "name": "task-clock",
                "cnt": 19490.018693
              },
              {
                "name": "max-rss",
                "cnt": 554352
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          173436502245
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 4058.379448
              },
              {
                "name": "max-rss",
                "cnt": 305588
              },
              {
                "name": "instructions:u",
                "cnt": 24349479074
              },
              {
                "name": "cpu-clock",
                "cnt": 4058.356308
              },
              {
                "name": "wall-time",
                "cnt": 3.746905695
              },
              {
                "name": "faults",
                "cnt": 163951
              },
              {
                "name": "cycles:u",
                "cnt": 15415721901
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          24349479074
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1476955421
              },
              {
                "name": "cpu-clock",
                "cnt": 444.665367
              },
              {
                "name": "instructions:u",
                "cnt": 2124956424
              },
              {
                "name": "faults",
                "cnt": 58980
              },
              {
                "name": "max-rss",
                "cnt": 273552
              },
              {
                "name": "wall-time",
                "cnt": 0.439748526
              },
              {
                "name": "task-clock",
                "cnt": 444.678433
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          2124956424
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 165132
              },
              {
                "name": "instructions:u",
                "cnt": 24108834427
              },
              {
                "name": "cycles:u",
                "cnt": 15224304141
              },
              {
                "name": "max-rss",
                "cnt": 312020
              },
              {
                "name": "cpu-clock",
                "cnt": 4018.67081
              },
              {
                "name": "wall-time",
                "cnt": 3.681371668
              },
              {
                "name": "task-clock",
                "cnt": 4018.651325
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          24108834427
        ]
      ],
      "unify-linearly-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 109.952027
              },
              {
                "name": "cpu-clock",
                "cnt": 109.95179
              },
              {
                "name": "faults",
                "cnt": 6306
              },
              {
                "name": "cycles:u",
                "cnt": 380524286
              },
              {
                "name": "wall-time",
                "cnt": 0.116072686
              },
              {
                "name": "max-rss",
                "cnt": 108532
              },
              {
                "name": "instructions:u",
                "cnt": 461942994
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          461942994
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 474320909
              },
              {
                "name": "task-clock",
                "cnt": 113.965282
              },
              {
                "name": "faults",
                "cnt": 6321
              },
              {
                "name": "cycles:u",
                "cnt": 394939086
              },
              {
                "name": "wall-time",
                "cnt": 0.120310452
              },
              {
                "name": "max-rss",
                "cnt": 108656
              },
              {
                "name": "cpu-clock",
                "cnt": 113.964708
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          474320909
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 7575
              },
              {
                "name": "max-rss",
                "cnt": 115264
              },
              {
                "name": "cycles:u",
                "cnt": 414299219
              },
              {
                "name": "task-clock",
                "cnt": 120.081816
              },
              {
                "name": "cpu-clock",
                "cnt": 120.080564
              },
              {
                "name": "instructions:u",
                "cnt": 508657130
              },
              {
                "name": "wall-time",
                "cnt": 0.126301319
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          508657130
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 306209198
              },
              {
                "name": "cpu-clock",
                "cnt": 92.168454
              },
              {
                "name": "max-rss",
                "cnt": 99364
              },
              {
                "name": "instructions:u",
                "cnt": 353720324
              },
              {
                "name": "wall-time",
                "cnt": 0.097262724
              },
              {
                "name": "task-clock",
                "cnt": 92.169458
              },
              {
                "name": "faults",
                "cnt": 6692
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          353720324
        ],
        [
          "patched incremental: dummy fn-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 112972
              },
              {
                "name": "faults",
                "cnt": 7304
              },
              {
                "name": "wall-time",
                "cnt": 0.102973033
              },
              {
                "name": "cycles:u",
                "cnt": 326431950
              },
              {
                "name": "cpu-clock",
                "cnt": 97.788023
              },
              {
                "name": "task-clock",
                "cnt": 97.78918
              },
              {
                "name": "instructions:u",
                "cnt": 380300067
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          380300067
        ]
      ],
      "hyper-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 74440742958
              },
              {
                "name": "faults",
                "cnt": 73450
              },
              {
                "name": "task-clock",
                "cnt": 19735.805135
              },
              {
                "name": "instructions:u",
                "cnt": 57294459257
              },
              {
                "name": "max-rss",
                "cnt": 276808
              },
              {
                "name": "wall-time",
                "cnt": 4.41351032
              },
              {
                "name": "cpu-clock",
                "cnt": 19735.842792
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          57294459257
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 60748966350
              },
              {
                "name": "task-clock",
                "cnt": 20162.058922
              },
              {
                "name": "wall-time",
                "cnt": 4.781460168
              },
              {
                "name": "max-rss",
                "cnt": 279200
              },
              {
                "name": "cpu-clock",
                "cnt": 20162.083756
              },
              {
                "name": "faults",
                "cnt": 73594
              },
              {
                "name": "cycles:u",
                "cnt": 76078551878
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          60748966350
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 61884073236
              },
              {
                "name": "max-rss",
                "cnt": 340112
              },
              {
                "name": "instructions:u",
                "cnt": 45673548328
              },
              {
                "name": "cpu-clock",
                "cnt": 16442.997296
              },
              {
                "name": "task-clock",
                "cnt": 16442.964695
              },
              {
                "name": "wall-time",
                "cnt": 4.060307206
              },
              {
                "name": "faults",
                "cnt": 78982
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          45673548328
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 298556
              },
              {
                "name": "wall-time",
                "cnt": 0.918249069
              },
              {
                "name": "task-clock",
                "cnt": 956.210714
              },
              {
                "name": "instructions:u",
                "cnt": 4129323088
              },
              {
                "name": "cpu-clock",
                "cnt": 956.1664
              },
              {
                "name": "faults",
                "cnt": 52437
              },
              {
                "name": "cycles:u",
                "cnt": 3425264053
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          4129323088
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 986.443826
              },
              {
                "name": "cycles:u",
                "cnt": 3543487629
              },
              {
                "name": "cpu-clock",
                "cnt": 986.382508
              },
              {
                "name": "wall-time",
                "cnt": 0.927544168
              },
              {
                "name": "max-rss",
                "cnt": 304316
              },
              {
                "name": "faults",
                "cnt": 51908
              },
              {
                "name": "instructions:u",
                "cnt": 4303332854
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4303332854
        ]
      ],
      "clap-rs-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 113293
              },
              {
                "name": "instructions:u",
                "cnt": 26602986446
              },
              {
                "name": "cycles:u",
                "cnt": 18767975407
              },
              {
                "name": "task-clock",
                "cnt": 4836.638134
              },
              {
                "name": "max-rss",
                "cnt": 347348
              },
              {
                "name": "cpu-clock",
                "cnt": 4836.63882
              },
              {
                "name": "wall-time",
                "cnt": 4.850829546
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          26602986446
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 501352
              },
              {
                "name": "wall-time",
                "cnt": 36.180969081
              },
              {
                "name": "task-clock",
                "cnt": 36174.303131
              },
              {
                "name": "cpu-clock",
                "cnt": 36174.306606
              },
              {
                "name": "cycles:u",
                "cnt": 143178057705
              },
              {
                "name": "instructions:u",
                "cnt": 330392716040
              },
              {
                "name": "faults",
                "cnt": 256374
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          330392716040
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 7.342822005
              },
              {
                "name": "task-clock",
                "cnt": 7336.741793
              },
              {
                "name": "max-rss",
                "cnt": 397696
              },
              {
                "name": "faults",
                "cnt": 150856
              },
              {
                "name": "instructions:u",
                "cnt": 46733049018
              },
              {
                "name": "cpu-clock",
                "cnt": 7336.743029
              },
              {
                "name": "cycles:u",
                "cnt": 28436669839
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          46733049018
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 878144
              },
              {
                "name": "wall-time",
                "cnt": 2.348905414
              },
              {
                "name": "cycles:u",
                "cnt": 8353040378
              },
              {
                "name": "task-clock",
                "cnt": 2369.229777
              },
              {
                "name": "cpu-clock",
                "cnt": 2369.231407
              },
              {
                "name": "faults",
                "cnt": 239457
              },
              {
                "name": "instructions:u",
                "cnt": 13658037943
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          13658037943
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 3.095393663
              },
              {
                "name": "max-rss",
                "cnt": 885964
              },
              {
                "name": "instructions:u",
                "cnt": 17610435741
              },
              {
                "name": "faults",
                "cnt": 240316
              },
              {
                "name": "cycles:u",
                "cnt": 11295343723
              },
              {
                "name": "task-clock",
                "cnt": 3122.158257
              },
              {
                "name": "cpu-clock",
                "cnt": 3122.168305
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          17610435741
        ]
      ],
      "crates.io-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 32.796211326
              },
              {
                "name": "faults",
                "cnt": 562116
              },
              {
                "name": "cpu-clock",
                "cnt": 153316.746884
              },
              {
                "name": "task-clock",
                "cnt": 153316.644567
              },
              {
                "name": "cycles:u",
                "cnt": 578298946626
              },
              {
                "name": "max-rss",
                "cnt": 738972
              },
              {
                "name": "instructions:u",
                "cnt": 471285857747
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          471285857747
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 415359
              },
              {
                "name": "instructions:u",
                "cnt": 326948918720
              },
              {
                "name": "cycles:u",
                "cnt": 423820204017
              },
              {
                "name": "max-rss",
                "cnt": 891604
              },
              {
                "name": "wall-time",
                "cnt": 24.66638881
              },
              {
                "name": "task-clock",
                "cnt": 112402.98093
              },
              {
                "name": "cpu-clock",
                "cnt": 112403.191936
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          326948918720
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 183573
              },
              {
                "name": "cycles:u",
                "cnt": 16076562805
              },
              {
                "name": "max-rss",
                "cnt": 822108
              },
              {
                "name": "cpu-clock",
                "cnt": 4347.388159
              },
              {
                "name": "wall-time",
                "cnt": 4.229127731
              },
              {
                "name": "instructions:u",
                "cnt": 19845719011
              },
              {
                "name": "task-clock",
                "cnt": 4347.512237
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          19845719011
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.403314647
              },
              {
                "name": "task-clock",
                "cnt": 5322.213815
              },
              {
                "name": "cpu-clock",
                "cnt": 5322.111856
              },
              {
                "name": "cycles:u",
                "cnt": 19833915884
              },
              {
                "name": "max-rss",
                "cnt": 810156
              },
              {
                "name": "instructions:u",
                "cnt": 23838101619
              },
              {
                "name": "faults",
                "cnt": 184443
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          23838101619
        ]
      ],
      "futures-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 3144545547
              },
              {
                "name": "cpu-clock",
                "cnt": 813.472961
              },
              {
                "name": "faults",
                "cnt": 13254
              },
              {
                "name": "instructions:u",
                "cnt": 4430065927
              },
              {
                "name": "max-rss",
                "cnt": 151252
              },
              {
                "name": "task-clock",
                "cnt": 813.472934
              },
              {
                "name": "wall-time",
                "cnt": 0.846082954
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          4430065927
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 152384
              },
              {
                "name": "instructions:u",
                "cnt": 5431406582
              },
              {
                "name": "wall-time",
                "cnt": 0.956872687
              },
              {
                "name": "cpu-clock",
                "cnt": 951.183161
              },
              {
                "name": "task-clock",
                "cnt": 951.183194
              },
              {
                "name": "cycles:u",
                "cnt": 3689839879
              },
              {
                "name": "faults",
                "cnt": 13652
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          5431406582
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.970600258
              },
              {
                "name": "cpu-clock",
                "cnt": 964.953124
              },
              {
                "name": "cycles:u",
                "cnt": 3712034534
              },
              {
                "name": "faults",
                "cnt": 19489
              },
              {
                "name": "max-rss",
                "cnt": 177392
              },
              {
                "name": "task-clock",
                "cnt": 964.944079
              },
              {
                "name": "instructions:u",
                "cnt": 5168247489
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          5168247489
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 337.220364
              },
              {
                "name": "instructions:u",
                "cnt": 1625105351
              },
              {
                "name": "cycles:u",
                "cnt": 1200052656
              },
              {
                "name": "faults",
                "cnt": 20235
              },
              {
                "name": "cpu-clock",
                "cnt": 337.220064
              },
              {
                "name": "max-rss",
                "cnt": 174844
              },
              {
                "name": "wall-time",
                "cnt": 0.333082349
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1625105351
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 173364
              },
              {
                "name": "instructions:u",
                "cnt": 1613768700
              },
              {
                "name": "wall-time",
                "cnt": 0.324259045
              },
              {
                "name": "faults",
                "cnt": 19951
              },
              {
                "name": "task-clock",
                "cnt": 328.340577
              },
              {
                "name": "cycles:u",
                "cnt": 1175956257
              },
              {
                "name": "cpu-clock",
                "cnt": 328.339856
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1613768700
        ]
      ],
      "unused-warnings-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2917611181
              },
              {
                "name": "cycles:u",
                "cnt": 1975176052
              },
              {
                "name": "faults",
                "cnt": 40712
              },
              {
                "name": "task-clock",
                "cnt": 576.760542
              },
              {
                "name": "max-rss",
                "cnt": 155084
              },
              {
                "name": "wall-time",
                "cnt": 0.563686264
              },
              {
                "name": "cpu-clock",
                "cnt": 576.758812
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          2917611181
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 40681
              },
              {
                "name": "task-clock",
                "cnt": 576.384736
              },
              {
                "name": "cpu-clock",
                "cnt": 576.382605
              },
              {
                "name": "cycles:u",
                "cnt": 1971843206
              },
              {
                "name": "instructions:u",
                "cnt": 2918386256
              },
              {
                "name": "max-rss",
                "cnt": 155972
              },
              {
                "name": "wall-time",
                "cnt": 0.563626636
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          2918386256
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 231984
              },
              {
                "name": "task-clock",
                "cnt": 792.495453
              },
              {
                "name": "cycles:u",
                "cnt": 2739533673
              },
              {
                "name": "wall-time",
                "cnt": 0.785156445
              },
              {
                "name": "faults",
                "cnt": 63987
              },
              {
                "name": "cpu-clock",
                "cnt": 792.491606
              },
              {
                "name": "instructions:u",
                "cnt": 3869577686
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          3869577686
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2685573062
              },
              {
                "name": "faults",
                "cnt": 66448
              },
              {
                "name": "max-rss",
                "cnt": 229196
              },
              {
                "name": "cpu-clock",
                "cnt": 797.111252
              },
              {
                "name": "wall-time",
                "cnt": 0.772590883
              },
              {
                "name": "instructions:u",
                "cnt": 3607367387
              },
              {
                "name": "task-clock",
                "cnt": 797.114421
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3607367387
        ],
        [
          "patched incremental: dummy fn-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 794.577058
              },
              {
                "name": "wall-time",
                "cnt": 0.754892711
              },
              {
                "name": "cpu-clock",
                "cnt": 794.566328
              },
              {
                "name": "faults",
                "cnt": 65810
              },
              {
                "name": "max-rss",
                "cnt": 245660
              },
              {
                "name": "cycles:u",
                "cnt": 2723581672
              },
              {
                "name": "instructions:u",
                "cnt": 3656717359
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          3656717359
        ]
      ],
      "helloworld-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 850916298
              },
              {
                "name": "faults",
                "cnt": 19488
              },
              {
                "name": "cpu-clock",
                "cnt": 270.220357
              },
              {
                "name": "wall-time",
                "cnt": 0.264282874
              },
              {
                "name": "instructions:u",
                "cnt": 1274453404
              },
              {
                "name": "max-rss",
                "cnt": 129508
              },
              {
                "name": "task-clock",
                "cnt": 270.223151
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1274453404
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 19480
              },
              {
                "name": "max-rss",
                "cnt": 129204
              },
              {
                "name": "wall-time",
                "cnt": 0.264636077
              },
              {
                "name": "cpu-clock",
                "cnt": 270.828456
              },
              {
                "name": "task-clock",
                "cnt": 270.830531
              },
              {
                "name": "cycles:u",
                "cnt": 852616039
              },
              {
                "name": "instructions:u",
                "cnt": 1275427937
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1275427937
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 20958
              },
              {
                "name": "task-clock",
                "cnt": 280.195758
              },
              {
                "name": "instructions:u",
                "cnt": 1303480609
              },
              {
                "name": "wall-time",
                "cnt": 0.273801732
              },
              {
                "name": "cycles:u",
                "cnt": 879951717
              },
              {
                "name": "max-rss",
                "cnt": 132544
              },
              {
                "name": "cpu-clock",
                "cnt": 280.193561
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1303480609
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1182734594
              },
              {
                "name": "task-clock",
                "cnt": 250.111859
              },
              {
                "name": "faults",
                "cnt": 19714
              },
              {
                "name": "cpu-clock",
                "cnt": 250.107655
              },
              {
                "name": "max-rss",
                "cnt": 110896
              },
              {
                "name": "cycles:u",
                "cnt": 778627441
              },
              {
                "name": "wall-time",
                "cnt": 0.252049275
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1182734594
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 274.231682
              },
              {
                "name": "instructions:u",
                "cnt": 1282258139
              },
              {
                "name": "cycles:u",
                "cnt": 861786253
              },
              {
                "name": "wall-time",
                "cnt": 0.268514655
              },
              {
                "name": "faults",
                "cnt": 20880
              },
              {
                "name": "max-rss",
                "cnt": 134980
              },
              {
                "name": "task-clock",
                "cnt": 274.244707
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1282258139
        ]
      ],
      "deeply-nested": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 219.651254
              },
              {
                "name": "wall-time",
                "cnt": 0.194620996
              },
              {
                "name": "max-rss",
                "cnt": 135976
              },
              {
                "name": "faults",
                "cnt": 9136
              },
              {
                "name": "cpu-clock",
                "cnt": 219.64732
              },
              {
                "name": "instructions:u",
                "cnt": 925177422
              },
              {
                "name": "cycles:u",
                "cnt": 781683631
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          925177422
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.206351367
              },
              {
                "name": "max-rss",
                "cnt": 136520
              },
              {
                "name": "instructions:u",
                "cnt": 928247262
              },
              {
                "name": "task-clock",
                "cnt": 218.809568
              },
              {
                "name": "faults",
                "cnt": 9327
              },
              {
                "name": "cpu-clock",
                "cnt": 218.803257
              },
              {
                "name": "cycles:u",
                "cnt": 777547598
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          928247262
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10917
              },
              {
                "name": "cycles:u",
                "cnt": 857716533
              },
              {
                "name": "cpu-clock",
                "cnt": 242.62854
              },
              {
                "name": "instructions:u",
                "cnt": 1014164821
              },
              {
                "name": "task-clock",
                "cnt": 242.633951
              },
              {
                "name": "wall-time",
                "cnt": 0.209371731
              },
              {
                "name": "max-rss",
                "cnt": 143180
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1014164821
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 114.784832
              },
              {
                "name": "cpu-clock",
                "cnt": 114.763477
              },
              {
                "name": "cycles:u",
                "cnt": 378656748
              },
              {
                "name": "max-rss",
                "cnt": 127884
              },
              {
                "name": "instructions:u",
                "cnt": 452031297
              },
              {
                "name": "wall-time",
                "cnt": 0.117977393
              },
              {
                "name": "faults",
                "cnt": 8368
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          452031297
        ]
      ],
      "unify-linearly": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 20807
              },
              {
                "name": "cpu-clock",
                "cnt": 306.554836
              },
              {
                "name": "wall-time",
                "cnt": 0.294575043
              },
              {
                "name": "task-clock",
                "cnt": 306.568308
              },
              {
                "name": "max-rss",
                "cnt": 132560
              },
              {
                "name": "instructions:u",
                "cnt": 1437916384
              },
              {
                "name": "cycles:u",
                "cnt": 986112523
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1437916384
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.296678799
              },
              {
                "name": "cpu-clock",
                "cnt": 310.385962
              },
              {
                "name": "cycles:u",
                "cnt": 1000495527
              },
              {
                "name": "instructions:u",
                "cnt": 1450226216
              },
              {
                "name": "max-rss",
                "cnt": 132596
              },
              {
                "name": "faults",
                "cnt": 20795
              },
              {
                "name": "task-clock",
                "cnt": 310.380748
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1450226216
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1520799930
              },
              {
                "name": "max-rss",
                "cnt": 140424
              },
              {
                "name": "wall-time",
                "cnt": 0.309851325
              },
              {
                "name": "faults",
                "cnt": 22634
              },
              {
                "name": "cycles:u",
                "cnt": 1055093851
              },
              {
                "name": "cpu-clock",
                "cnt": 328.767467
              },
              {
                "name": "task-clock",
                "cnt": 328.752445
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1520799930
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.264145983
              },
              {
                "name": "faults",
                "cnt": 20650
              },
              {
                "name": "instructions:u",
                "cnt": 1231770098
              },
              {
                "name": "cycles:u",
                "cnt": 815967718
              },
              {
                "name": "max-rss",
                "cnt": 119460
              },
              {
                "name": "cpu-clock",
                "cnt": 262.565513
              },
              {
                "name": "task-clock",
                "cnt": 262.575176
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1231770098
        ],
        [
          "patched incremental: dummy fn",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 139792
              },
              {
                "name": "instructions:u",
                "cnt": 1372703841
              },
              {
                "name": "task-clock",
                "cnt": 303.03285
              },
              {
                "name": "cpu-clock",
                "cnt": 303.02848
              },
              {
                "name": "faults",
                "cnt": 22418
              },
              {
                "name": "wall-time",
                "cnt": 0.284679076
              },
              {
                "name": "cycles:u",
                "cnt": 955347882
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          1372703841
        ]
      ],
      "html5ever-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 11316705951
              },
              {
                "name": "max-rss",
                "cnt": 231624
              },
              {
                "name": "wall-time",
                "cnt": 1.972326708
              },
              {
                "name": "faults",
                "cnt": 43925
              },
              {
                "name": "cycles:u",
                "cnt": 7529582600
              },
              {
                "name": "task-clock",
                "cnt": 1946.621476
              },
              {
                "name": "cpu-clock",
                "cnt": 1946.621212
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          11316705951
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2376.841631
              },
              {
                "name": "cpu-clock",
                "cnt": 2376.851773
              },
              {
                "name": "faults",
                "cnt": 58419
              },
              {
                "name": "instructions:u",
                "cnt": 14262527123
              },
              {
                "name": "max-rss",
                "cnt": 274560
              },
              {
                "name": "cycles:u",
                "cnt": 9171039871
              },
              {
                "name": "wall-time",
                "cnt": 2.405678242
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          14262527123
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5967678177
              },
              {
                "name": "cycles:u",
                "cnt": 3649996598
              },
              {
                "name": "cpu-clock",
                "cnt": 983.101166
              },
              {
                "name": "task-clock",
                "cnt": 983.101017
              },
              {
                "name": "max-rss",
                "cnt": 256496
              },
              {
                "name": "faults",
                "cnt": 48921
              },
              {
                "name": "wall-time",
                "cnt": 0.996266647
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          5967678177
        ]
      ],
      "clap-rs-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 34.649417893
              },
              {
                "name": "cycles:u",
                "cnt": 281782670386
              },
              {
                "name": "instructions:u",
                "cnt": 274945129355
              },
              {
                "name": "cpu-clock",
                "cnt": 73654.588306
              },
              {
                "name": "max-rss",
                "cnt": 448004
              },
              {
                "name": "faults",
                "cnt": 433018
              },
              {
                "name": "task-clock",
                "cnt": 73654.538565
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          274945129355
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 578911484815
              },
              {
                "name": "faults",
                "cnt": 571445
              },
              {
                "name": "cycles:u",
                "cnt": 405445768689
              },
              {
                "name": "max-rss",
                "cnt": 501500
              },
              {
                "name": "task-clock",
                "cnt": 104864.315119
              },
              {
                "name": "cpu-clock",
                "cnt": 104864.372984
              },
              {
                "name": "wall-time",
                "cnt": 65.967056838
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          578911484815
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 224590357301
              },
              {
                "name": "faults",
                "cnt": 422164
              },
              {
                "name": "max-rss",
                "cnt": 626836
              },
              {
                "name": "wall-time",
                "cnt": 26.500649654
              },
              {
                "name": "task-clock",
                "cnt": 58894.331924
              },
              {
                "name": "instructions:u",
                "cnt": 212666544854
              },
              {
                "name": "cpu-clock",
                "cnt": 58894.405462
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          212666544854
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 11090013695
              },
              {
                "name": "wall-time",
                "cnt": 3.071636773
              },
              {
                "name": "task-clock",
                "cnt": 3125.273844
              },
              {
                "name": "faults",
                "cnt": 280422
              },
              {
                "name": "max-rss",
                "cnt": 997172
              },
              {
                "name": "instructions:u",
                "cnt": 16823327343
              },
              {
                "name": "cpu-clock",
                "cnt": 3125.208361
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          16823327343
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 36661475889
              },
              {
                "name": "wall-time",
                "cnt": 4.771362485
              },
              {
                "name": "max-rss",
                "cnt": 1020732
              },
              {
                "name": "cpu-clock",
                "cnt": 8404.001979
              },
              {
                "name": "cycles:u",
                "cnt": 31212882207
              },
              {
                "name": "faults",
                "cnt": 294336
              },
              {
                "name": "task-clock",
                "cnt": 8404.025459
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          36661475889
        ]
      ],
      "crates.io-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 419164
              },
              {
                "name": "cpu-clock",
                "cnt": 7630.986202
              },
              {
                "name": "task-clock",
                "cnt": 7630.984373
              },
              {
                "name": "cycles:u",
                "cnt": 29824999380
              },
              {
                "name": "wall-time",
                "cnt": 7.654094496
              },
              {
                "name": "faults",
                "cnt": 85142
              },
              {
                "name": "instructions:u",
                "cnt": 41167819750
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          41167819750
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 581356
              },
              {
                "name": "faults",
                "cnt": 126127
              },
              {
                "name": "wall-time",
                "cnt": 8.913788228
              },
              {
                "name": "cpu-clock",
                "cnt": 8879.055733
              },
              {
                "name": "cycles:u",
                "cnt": 34607502287
              },
              {
                "name": "task-clock",
                "cnt": 8879.05435
              },
              {
                "name": "instructions:u",
                "cnt": 47481906092
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          47481906092
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 555520
              },
              {
                "name": "instructions:u",
                "cnt": 14991824407
              },
              {
                "name": "wall-time",
                "cnt": 3.08854234
              },
              {
                "name": "cpu-clock",
                "cnt": 3103.761615
              },
              {
                "name": "cycles:u",
                "cnt": 11599038938
              },
              {
                "name": "faults",
                "cnt": 124589
              },
              {
                "name": "task-clock",
                "cnt": 3103.761184
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          14991824407
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 15581910640
              },
              {
                "name": "wall-time",
                "cnt": 3.152881074
              },
              {
                "name": "task-clock",
                "cnt": 3169.513356
              },
              {
                "name": "faults",
                "cnt": 124139
              },
              {
                "name": "max-rss",
                "cnt": 553316
              },
              {
                "name": "cpu-clock",
                "cnt": 3169.512686
              },
              {
                "name": "cycles:u",
                "cnt": 11862776345
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          15581910640
        ]
      ],
      "piston-image": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 336564
              },
              {
                "name": "cpu-clock",
                "cnt": 10131.711705
              },
              {
                "name": "wall-time",
                "cnt": 4.606674733
              },
              {
                "name": "instructions:u",
                "cnt": 39363287838
              },
              {
                "name": "cycles:u",
                "cnt": 38057176644
              },
              {
                "name": "faults",
                "cnt": 118958
              },
              {
                "name": "task-clock",
                "cnt": 10131.7075
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          39363287838
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 10893.178215
              },
              {
                "name": "instructions:u",
                "cnt": 44925239876
              },
              {
                "name": "wall-time",
                "cnt": 5.252395723
              },
              {
                "name": "task-clock",
                "cnt": 10893.15001
              },
              {
                "name": "faults",
                "cnt": 120703
              },
              {
                "name": "cycles:u",
                "cnt": 40987370741
              },
              {
                "name": "max-rss",
                "cnt": 342648
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          44925239876
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 399316
              },
              {
                "name": "cpu-clock",
                "cnt": 11951.410409
              },
              {
                "name": "cycles:u",
                "cnt": 44862161272
              },
              {
                "name": "task-clock",
                "cnt": 11951.4113
              },
              {
                "name": "faults",
                "cnt": 132351
              },
              {
                "name": "wall-time",
                "cnt": 5.404556679
              },
              {
                "name": "instructions:u",
                "cnt": 44675570397
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          44675570397
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1243.210535
              },
              {
                "name": "faults",
                "cnt": 65868
              },
              {
                "name": "wall-time",
                "cnt": 1.195206682
              },
              {
                "name": "task-clock",
                "cnt": 1243.288786
              },
              {
                "name": "instructions:u",
                "cnt": 5384436722
              },
              {
                "name": "max-rss",
                "cnt": 362012
              },
              {
                "name": "cycles:u",
                "cnt": 4458909913
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          5384436722
        ]
      ],
      "clap-rs": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 73236086897
              },
              {
                "name": "task-clock",
                "cnt": 19272.890895
              },
              {
                "name": "cpu-clock",
                "cnt": 19272.922077
              },
              {
                "name": "max-rss",
                "cnt": 563500
              },
              {
                "name": "wall-time",
                "cnt": 11.831938824
              },
              {
                "name": "faults",
                "cnt": 326804
              },
              {
                "name": "instructions:u",
                "cnt": 85484275490
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          85484275490
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 466672
              },
              {
                "name": "instructions:u",
                "cnt": 389441277254
              },
              {
                "name": "wall-time",
                "cnt": 43.039008866
              },
              {
                "name": "task-clock",
                "cnt": 50457.671069
              },
              {
                "name": "cpu-clock",
                "cnt": 50457.725472
              },
              {
                "name": "cycles:u",
                "cnt": 197184870772
              },
              {
                "name": "max-rss",
                "cnt": 572968
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          389441277254
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 381153
              },
              {
                "name": "wall-time",
                "cnt": 14.465894224
              },
              {
                "name": "task-clock",
                "cnt": 25006.053913
              },
              {
                "name": "max-rss",
                "cnt": 687208
              },
              {
                "name": "cpu-clock",
                "cnt": 25006.090032
              },
              {
                "name": "cycles:u",
                "cnt": 94875520962
              },
              {
                "name": "instructions:u",
                "cnt": 110712942542
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          110712942542
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 3174.918163
              },
              {
                "name": "wall-time",
                "cnt": 3.115434027
              },
              {
                "name": "faults",
                "cnt": 281321
              },
              {
                "name": "cycles:u",
                "cnt": 11245216290
              },
              {
                "name": "instructions:u",
                "cnt": 17053437509
              },
              {
                "name": "max-rss",
                "cnt": 997436
              },
              {
                "name": "cpu-clock",
                "cnt": 3174.890428
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          17053437509
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 1173552
              },
              {
                "name": "task-clock",
                "cnt": 13663.601048
              },
              {
                "name": "wall-time",
                "cnt": 9.211323877
              },
              {
                "name": "instructions:u",
                "cnt": 58928065465
              },
              {
                "name": "cpu-clock",
                "cnt": 13663.570951
              },
              {
                "name": "faults",
                "cnt": 414227
              },
              {
                "name": "cycles:u",
                "cnt": 51338863041
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          58928065465
        ]
      ],
      "regex-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5166121372
              },
              {
                "name": "task-clock",
                "cnt": 1103.356936
              },
              {
                "name": "cpu-clock",
                "cnt": 1103.356329
              },
              {
                "name": "cycles:u",
                "cnt": 4256858206
              },
              {
                "name": "faults",
                "cnt": 21773
              },
              {
                "name": "wall-time",
                "cnt": 1.130844094
              },
              {
                "name": "max-rss",
                "cnt": 184572
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5166121372
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 23303
              },
              {
                "name": "cpu-clock",
                "cnt": 1465.656105
              },
              {
                "name": "cycles:u",
                "cnt": 5690750962
              },
              {
                "name": "wall-time",
                "cnt": 1.496562749
              },
              {
                "name": "task-clock",
                "cnt": 1465.657216
              },
              {
                "name": "max-rss",
                "cnt": 189752
              },
              {
                "name": "instructions:u",
                "cnt": 8221140151
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          8221140151
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1384.878683
              },
              {
                "name": "faults",
                "cnt": 32399
              },
              {
                "name": "wall-time",
                "cnt": 1.418809443
              },
              {
                "name": "cycles:u",
                "cnt": 5320193916
              },
              {
                "name": "cpu-clock",
                "cnt": 1384.86903
              },
              {
                "name": "max-rss",
                "cnt": 228312
              },
              {
                "name": "instructions:u",
                "cnt": 6524865976
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          6524865976
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 31166
              },
              {
                "name": "cycles:u",
                "cnt": 1971601720
              },
              {
                "name": "instructions:u",
                "cnt": 2681671121
              },
              {
                "name": "task-clock",
                "cnt": 540.841289
              },
              {
                "name": "wall-time",
                "cnt": 0.533133038
              },
              {
                "name": "cpu-clock",
                "cnt": 540.841426
              },
              {
                "name": "max-rss",
                "cnt": 215160
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2681671121
        ],
        [
          "patched incremental: compile one-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 221136
              },
              {
                "name": "cycles:u",
                "cnt": 2533211658
              },
              {
                "name": "faults",
                "cnt": 31923
              },
              {
                "name": "cpu-clock",
                "cnt": 686.394012
              },
              {
                "name": "wall-time",
                "cnt": 0.677875324
              },
              {
                "name": "task-clock",
                "cnt": 686.393581
              },
              {
                "name": "instructions:u",
                "cnt": 3380935505
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          3380935505
        ],
        [
          "patched incremental: is valid cap letter-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 537.090364
              },
              {
                "name": "max-rss",
                "cnt": 215856
              },
              {
                "name": "instructions:u",
                "cnt": 2702066439
              },
              {
                "name": "cycles:u",
                "cnt": 1956392452
              },
              {
                "name": "faults",
                "cnt": 30807
              },
              {
                "name": "wall-time",
                "cnt": 0.528909897
              },
              {
                "name": "task-clock",
                "cnt": 537.090229
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          2702066439
        ],
        [
          "patched incremental: expand-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2009744413
              },
              {
                "name": "cpu-clock",
                "cnt": 553.939309
              },
              {
                "name": "max-rss",
                "cnt": 217336
              },
              {
                "name": "instructions:u",
                "cnt": 2738300500
              },
              {
                "name": "faults",
                "cnt": 31043
              },
              {
                "name": "wall-time",
                "cnt": 0.541841872
              },
              {
                "name": "task-clock",
                "cnt": 553.930665
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          2738300500
        ],
        [
          "patched incremental: Compiler new-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3400523141
              },
              {
                "name": "cpu-clock",
                "cnt": 697.283372
              },
              {
                "name": "faults",
                "cnt": 31998
              },
              {
                "name": "cycles:u",
                "cnt": 2579185047
              },
              {
                "name": "wall-time",
                "cnt": 0.685723833
              },
              {
                "name": "max-rss",
                "cnt": 221524
              },
              {
                "name": "task-clock",
                "cnt": 697.283741
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          3400523141
        ],
        [
          "patched incremental: reverse-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 32044
              },
              {
                "name": "cpu-clock",
                "cnt": 689.602456
              },
              {
                "name": "wall-time",
                "cnt": 0.678827621
              },
              {
                "name": "instructions:u",
                "cnt": 3397565168
              },
              {
                "name": "max-rss",
                "cnt": 221456
              },
              {
                "name": "task-clock",
                "cnt": 689.612731
              },
              {
                "name": "cycles:u",
                "cnt": 2555630588
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          3397565168
        ],
        [
          "patched incremental: byte frequencies-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.529064847
              },
              {
                "name": "instructions:u",
                "cnt": 2699392403
              },
              {
                "name": "max-rss",
                "cnt": 215800
              },
              {
                "name": "faults",
                "cnt": 30703
              },
              {
                "name": "task-clock",
                "cnt": 539.754344
              },
              {
                "name": "cpu-clock",
                "cnt": 539.754582
              },
              {
                "name": "cycles:u",
                "cnt": 1954156454
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          2699392403
        ],
        [
          "patched incremental: sparse set-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 31352
              },
              {
                "name": "max-rss",
                "cnt": 218692
              },
              {
                "name": "task-clock",
                "cnt": 636.353778
              },
              {
                "name": "wall-time",
                "cnt": 0.626178938
              },
              {
                "name": "cycles:u",
                "cnt": 2345187799
              },
              {
                "name": "cpu-clock",
                "cnt": 636.353168
              },
              {
                "name": "instructions:u",
                "cnt": 3146716416
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          3146716416
        ],
        [
          "patched incremental: Job-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2114178353
              },
              {
                "name": "cpu-clock",
                "cnt": 580.247842
              },
              {
                "name": "instructions:u",
                "cnt": 2859170650
              },
              {
                "name": "wall-time",
                "cnt": 0.570025603
              },
              {
                "name": "task-clock",
                "cnt": 580.248709
              },
              {
                "name": "faults",
                "cnt": 31283
              },
              {
                "name": "max-rss",
                "cnt": 218252
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          2859170650
        ]
      ],
      "issue-46449-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 754.509342
              },
              {
                "name": "instructions:u",
                "cnt": 2524531050
              },
              {
                "name": "wall-time",
                "cnt": 0.324424368
              },
              {
                "name": "faults",
                "cnt": 12926
              },
              {
                "name": "max-rss",
                "cnt": 154184
              },
              {
                "name": "cycles:u",
                "cnt": 2789125800
              },
              {
                "name": "task-clock",
                "cnt": 754.512493
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          2524531050
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 757.708303
              },
              {
                "name": "instructions:u",
                "cnt": 2532633826
              },
              {
                "name": "wall-time",
                "cnt": 0.317125551
              },
              {
                "name": "faults",
                "cnt": 13015
              },
              {
                "name": "cycles:u",
                "cnt": 2793933189
              },
              {
                "name": "cpu-clock",
                "cnt": 757.706072
              },
              {
                "name": "max-rss",
                "cnt": 154288
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          2532633826
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2147277797
              },
              {
                "name": "task-clock",
                "cnt": 660.868594
              },
              {
                "name": "cpu-clock",
                "cnt": 660.856585
              },
              {
                "name": "cycles:u",
                "cnt": 2417278130
              },
              {
                "name": "max-rss",
                "cnt": 155192
              },
              {
                "name": "faults",
                "cnt": 14521
              },
              {
                "name": "wall-time",
                "cnt": 0.295782113
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          2147277797
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 138.008623
              },
              {
                "name": "cycles:u",
                "cnt": 461794817
              },
              {
                "name": "cpu-clock",
                "cnt": 138.000325
              },
              {
                "name": "max-rss",
                "cnt": 139200
              },
              {
                "name": "faults",
                "cnt": 10176
              },
              {
                "name": "instructions:u",
                "cnt": 540707994
              },
              {
                "name": "wall-time",
                "cnt": 0.157975599
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          540707994
        ],
        [
          "patched incremental: io error 6144-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2404082935
              },
              {
                "name": "faults",
                "cnt": 14942
              },
              {
                "name": "max-rss",
                "cnt": 157776
              },
              {
                "name": "wall-time",
                "cnt": 0.292309873
              },
              {
                "name": "instructions:u",
                "cnt": 2158532858
              },
              {
                "name": "task-clock",
                "cnt": 658.315055
              },
              {
                "name": "cpu-clock",
                "cnt": 658.311779
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          2158532858
        ],
        [
          "patched incremental: u32 3072-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1540945299
              },
              {
                "name": "wall-time",
                "cnt": 0.220081787
              },
              {
                "name": "faults",
                "cnt": 14361
              },
              {
                "name": "instructions:u",
                "cnt": 1448903395
              },
              {
                "name": "cpu-clock",
                "cnt": 430.902535
              },
              {
                "name": "max-rss",
                "cnt": 158780
              },
              {
                "name": "task-clock",
                "cnt": 430.909036
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          1448903395
        ],
        [
          "patched incremental: u8 3072-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 158204
              },
              {
                "name": "task-clock",
                "cnt": 420.203465
              },
              {
                "name": "cycles:u",
                "cnt": 1494759626
              },
              {
                "name": "faults",
                "cnt": 14442
              },
              {
                "name": "wall-time",
                "cnt": 0.206584685
              },
              {
                "name": "cpu-clock",
                "cnt": 420.201968
              },
              {
                "name": "instructions:u",
                "cnt": 1385027269
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          1385027269
        ],
        [
          "patched incremental: empty 3072-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1498032324
              },
              {
                "name": "task-clock",
                "cnt": 420.53362
              },
              {
                "name": "instructions:u",
                "cnt": 1429432110
              },
              {
                "name": "faults",
                "cnt": 14371
              },
              {
                "name": "max-rss",
                "cnt": 158728
              },
              {
                "name": "cpu-clock",
                "cnt": 420.529578
              },
              {
                "name": "wall-time",
                "cnt": 0.215454666
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          1429432110
        ],
        [
          "patched incremental: static str 6144-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 158188
              },
              {
                "name": "cycles:u",
                "cnt": 1550606770
              },
              {
                "name": "faults",
                "cnt": 14339
              },
              {
                "name": "instructions:u",
                "cnt": 1446011089
              },
              {
                "name": "wall-time",
                "cnt": 0.225813639
              },
              {
                "name": "cpu-clock",
                "cnt": 432.960349
              },
              {
                "name": "task-clock",
                "cnt": 432.974641
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          1446011089
        ]
      ],
      "coercions-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.876819888
              },
              {
                "name": "faults",
                "cnt": 26430
              },
              {
                "name": "cycles:u",
                "cnt": 3337853332
              },
              {
                "name": "cpu-clock",
                "cnt": 869.499571
              },
              {
                "name": "instructions:u",
                "cnt": 5873907072
              },
              {
                "name": "max-rss",
                "cnt": 146960
              },
              {
                "name": "task-clock",
                "cnt": 869.499652
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5873907072
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 968.997058
              },
              {
                "name": "faults",
                "cnt": 27362
              },
              {
                "name": "task-clock",
                "cnt": 968.998318
              },
              {
                "name": "max-rss",
                "cnt": 155720
              },
              {
                "name": "wall-time",
                "cnt": 0.974686083
              },
              {
                "name": "cycles:u",
                "cnt": 3722668846
              },
              {
                "name": "instructions:u",
                "cnt": 6928225766
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          6928225766
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1896466867
              },
              {
                "name": "max-rss",
                "cnt": 116456
              },
              {
                "name": "task-clock",
                "cnt": 294.825847
              },
              {
                "name": "cpu-clock",
                "cnt": 294.824804
              },
              {
                "name": "wall-time",
                "cnt": 0.300304061
              },
              {
                "name": "faults",
                "cnt": 19285
              },
              {
                "name": "cycles:u",
                "cnt": 1068621472
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1896466867
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 310.165897
              },
              {
                "name": "cycles:u",
                "cnt": 1118463108
              },
              {
                "name": "max-rss",
                "cnt": 136512
              },
              {
                "name": "faults",
                "cnt": 20429
              },
              {
                "name": "task-clock",
                "cnt": 310.166418
              },
              {
                "name": "instructions:u",
                "cnt": 2006857062
              },
              {
                "name": "wall-time",
                "cnt": 0.31559722
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2006857062
        ],
        [
          "patched incremental: add static arr item-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 27606
              },
              {
                "name": "task-clock",
                "cnt": 982.692989
              },
              {
                "name": "cycles:u",
                "cnt": 3776306299
              },
              {
                "name": "max-rss",
                "cnt": 159532
              },
              {
                "name": "cpu-clock",
                "cnt": 982.693245
              },
              {
                "name": "instructions:u",
                "cnt": 6950124900
              },
              {
                "name": "wall-time",
                "cnt": 1.001531571
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          6950124900
        ]
      ],
      "unused-warnings": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 160488
              },
              {
                "name": "cycles:u",
                "cnt": 1957315702
              },
              {
                "name": "wall-time",
                "cnt": 0.562796289
              },
              {
                "name": "task-clock",
                "cnt": 569.503678
              },
              {
                "name": "faults",
                "cnt": 40751
              },
              {
                "name": "cpu-clock",
                "cnt": 569.499754
              },
              {
                "name": "instructions:u",
                "cnt": 2879954397
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          2879954397
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 41032
              },
              {
                "name": "instructions:u",
                "cnt": 2880140739
              },
              {
                "name": "cpu-clock",
                "cnt": 566.471972
              },
              {
                "name": "wall-time",
                "cnt": 0.559628846
              },
              {
                "name": "max-rss",
                "cnt": 160252
              },
              {
                "name": "task-clock",
                "cnt": 566.467437
              },
              {
                "name": "cycles:u",
                "cnt": 1927863667
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          2880140739
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 778.687699
              },
              {
                "name": "wall-time",
                "cnt": 0.772825125
              },
              {
                "name": "instructions:u",
                "cnt": 3858543850
              },
              {
                "name": "cycles:u",
                "cnt": 2679309528
              },
              {
                "name": "cpu-clock",
                "cnt": 778.685777
              },
              {
                "name": "faults",
                "cnt": 64042
              },
              {
                "name": "max-rss",
                "cnt": 231108
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          3858543850
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2678406154
              },
              {
                "name": "max-rss",
                "cnt": 228272
              },
              {
                "name": "instructions:u",
                "cnt": 3606884848
              },
              {
                "name": "cpu-clock",
                "cnt": 784.242601
              },
              {
                "name": "task-clock",
                "cnt": 784.257026
              },
              {
                "name": "wall-time",
                "cnt": 0.754828478
              },
              {
                "name": "faults",
                "cnt": 66453
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3606884848
        ],
        [
          "patched incremental: dummy fn",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 65854
              },
              {
                "name": "max-rss",
                "cnt": 246232
              },
              {
                "name": "instructions:u",
                "cnt": 3647867886
              },
              {
                "name": "wall-time",
                "cnt": 0.755493015
              },
              {
                "name": "cpu-clock",
                "cnt": 778.155412
              },
              {
                "name": "task-clock",
                "cnt": 778.158973
              },
              {
                "name": "cycles:u",
                "cnt": 2661866517
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          3647867886
        ]
      ],
      "regex": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 8025.783945
              },
              {
                "name": "instructions:u",
                "cnt": 25515076232
              },
              {
                "name": "faults",
                "cnt": 112097
              },
              {
                "name": "cpu-clock",
                "cnt": 8025.785888
              },
              {
                "name": "cycles:u",
                "cnt": 29706598427
              },
              {
                "name": "max-rss",
                "cnt": 323972
              },
              {
                "name": "wall-time",
                "cnt": 2.689201227
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          25515076232
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 111966
              },
              {
                "name": "max-rss",
                "cnt": 314916
              },
              {
                "name": "task-clock",
                "cnt": 8192.574161
              },
              {
                "name": "cycles:u",
                "cnt": 30515327579
              },
              {
                "name": "instructions:u",
                "cnt": 28608988411
              },
              {
                "name": "cpu-clock",
                "cnt": 8192.593413
              },
              {
                "name": "wall-time",
                "cnt": 3.034994232
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          28608988411
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 128700
              },
              {
                "name": "cycles:u",
                "cnt": 33842931891
              },
              {
                "name": "task-clock",
                "cnt": 9148.367521
              },
              {
                "name": "wall-time",
                "cnt": 3.134117453
              },
              {
                "name": "max-rss",
                "cnt": 352944
              },
              {
                "name": "instructions:u",
                "cnt": 29513956428
              },
              {
                "name": "cpu-clock",
                "cnt": 9148.39776
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          29513956428
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3592472860
              },
              {
                "name": "max-rss",
                "cnt": 274336
              },
              {
                "name": "cycles:u",
                "cnt": 2793298776
              },
              {
                "name": "task-clock",
                "cnt": 790.778333
              },
              {
                "name": "faults",
                "cnt": 45920
              },
              {
                "name": "cpu-clock",
                "cnt": 790.75401
              },
              {
                "name": "wall-time",
                "cnt": 0.760201508
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3592472860
        ],
        [
          "patched incremental: compile one",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 7372046901
              },
              {
                "name": "cpu-clock",
                "cnt": 1778.500237
              },
              {
                "name": "faults",
                "cnt": 56201
              },
              {
                "name": "max-rss",
                "cnt": 302368
              },
              {
                "name": "task-clock",
                "cnt": 1778.531379
              },
              {
                "name": "cycles:u",
                "cnt": 6511224753
              },
              {
                "name": "wall-time",
                "cnt": 1.159334419
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          7372046901
        ],
        [
          "patched incremental: is valid cap letter",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3651783016
              },
              {
                "name": "cycles:u",
                "cnt": 2791270016
              },
              {
                "name": "faults",
                "cnt": 46156
              },
              {
                "name": "wall-time",
                "cnt": 0.75477066
              },
              {
                "name": "cpu-clock",
                "cnt": 793.125662
              },
              {
                "name": "task-clock",
                "cnt": 793.169724
              },
              {
                "name": "max-rss",
                "cnt": 280592
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          3651783016
        ],
        [
          "patched incremental: expand",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.89507159
              },
              {
                "name": "task-clock",
                "cnt": 1023.130481
              },
              {
                "name": "cycles:u",
                "cnt": 3672273821
              },
              {
                "name": "instructions:u",
                "cnt": 4512020638
              },
              {
                "name": "cpu-clock",
                "cnt": 1023.081532
              },
              {
                "name": "faults",
                "cnt": 49285
              },
              {
                "name": "max-rss",
                "cnt": 286480
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          4512020638
        ],
        [
          "patched incremental: Compiler new",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 6579416961
              },
              {
                "name": "wall-time",
                "cnt": 1.168358386
              },
              {
                "name": "cpu-clock",
                "cnt": 1795.729189
              },
              {
                "name": "instructions:u",
                "cnt": 7396244443
              },
              {
                "name": "max-rss",
                "cnt": 301712
              },
              {
                "name": "task-clock",
                "cnt": 1795.757091
              },
              {
                "name": "faults",
                "cnt": 56285
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          7396244443
        ],
        [
          "patched incremental: reverse",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.163929861
              },
              {
                "name": "instructions:u",
                "cnt": 7391432276
              },
              {
                "name": "task-clock",
                "cnt": 1766.069843
              },
              {
                "name": "cycles:u",
                "cnt": 6457477420
              },
              {
                "name": "faults",
                "cnt": 56271
              },
              {
                "name": "max-rss",
                "cnt": 302972
              },
              {
                "name": "cpu-clock",
                "cnt": 1766.044985
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          7391432276
        ],
        [
          "patched incremental: byte frequencies",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 44830
              },
              {
                "name": "wall-time",
                "cnt": 0.748917277
              },
              {
                "name": "task-clock",
                "cnt": 777.458254
              },
              {
                "name": "cpu-clock",
                "cnt": 777.426758
              },
              {
                "name": "instructions:u",
                "cnt": 3603566558
              },
              {
                "name": "cycles:u",
                "cnt": 2740961387
              },
              {
                "name": "max-rss",
                "cnt": 270540
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          3603566558
        ],
        [
          "patched incremental: sparse set",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 24086082906
              },
              {
                "name": "max-rss",
                "cnt": 347100
              },
              {
                "name": "wall-time",
                "cnt": 1.858935342
              },
              {
                "name": "instructions:u",
                "cnt": 20460427803
              },
              {
                "name": "task-clock",
                "cnt": 6581.846943
              },
              {
                "name": "cpu-clock",
                "cnt": 6581.813987
              },
              {
                "name": "faults",
                "cnt": 120422
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          20460427803
        ],
        [
          "patched incremental: Job",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 23471557110
              },
              {
                "name": "task-clock",
                "cnt": 6429.161863
              },
              {
                "name": "faults",
                "cnt": 118973
              },
              {
                "name": "cpu-clock",
                "cnt": 6429.160651
              },
              {
                "name": "wall-time",
                "cnt": 1.776190542
              },
              {
                "name": "max-rss",
                "cnt": 348264
              },
              {
                "name": "instructions:u",
                "cnt": 19780248930
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          19780248930
        ]
      ],
      "style-servo": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 2064776
              },
              {
                "name": "cycles:u",
                "cnt": 332353487600
              },
              {
                "name": "cpu-clock",
                "cnt": 87669.486081
              },
              {
                "name": "faults",
                "cnt": 1105826
              },
              {
                "name": "task-clock",
                "cnt": 87669.414164
              },
              {
                "name": "wall-time",
                "cnt": 50.059780577
              },
              {
                "name": "instructions:u",
                "cnt": 356189553348
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          356189553348
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 605708188150
              },
              {
                "name": "cpu-clock",
                "cnt": 135061.662001
              },
              {
                "name": "faults",
                "cnt": 2938632
              },
              {
                "name": "cycles:u",
                "cnt": 505159057511
              },
              {
                "name": "task-clock",
                "cnt": 135061.663623
              },
              {
                "name": "max-rss",
                "cnt": 2620484
              },
              {
                "name": "wall-time",
                "cnt": 75.658545291
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          605708188150
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 28584.888665
              },
              {
                "name": "faults",
                "cnt": 917336
              },
              {
                "name": "cpu-clock",
                "cnt": 28584.528165
              },
              {
                "name": "max-rss",
                "cnt": 2922076
              },
              {
                "name": "wall-time",
                "cnt": 24.282906415
              },
              {
                "name": "cycles:u",
                "cnt": 105996179568
              },
              {
                "name": "instructions:u",
                "cnt": 121875505094
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          121875505094
        ],
        [
          "patched incremental: debugging println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 47.390106204
              },
              {
                "name": "task-clock",
                "cnt": 82185.678663
              },
              {
                "name": "cpu-clock",
                "cnt": 82185.364172
              },
              {
                "name": "faults",
                "cnt": 2066083
              },
              {
                "name": "cycles:u",
                "cnt": 305460273005
              },
              {
                "name": "max-rss",
                "cnt": 3033832
              },
              {
                "name": "instructions:u",
                "cnt": 362625315189
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          362625315189
        ],
        [
          "patched incremental: b9b3e592dd cherry picked",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 113298.702642
              },
              {
                "name": "max-rss",
                "cnt": 3313956
              },
              {
                "name": "cycles:u",
                "cnt": 421351742574
              },
              {
                "name": "instructions:u",
                "cnt": 497673879904
              },
              {
                "name": "faults",
                "cnt": 2837787
              },
              {
                "name": "task-clock",
                "cnt": 113298.599343
              },
              {
                "name": "wall-time",
                "cnt": 60.878462596
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          497673879904
        ]
      ],
      "piston-image-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 48320.574604
              },
              {
                "name": "instructions:u",
                "cnt": 146394074551
              },
              {
                "name": "cpu-clock",
                "cnt": 48320.619776
              },
              {
                "name": "cycles:u",
                "cnt": 182251285894
              },
              {
                "name": "faults",
                "cnt": 164679
              },
              {
                "name": "max-rss",
                "cnt": 347356
              },
              {
                "name": "wall-time",
                "cnt": 9.854310932
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          146394074551
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 356088
              },
              {
                "name": "wall-time",
                "cnt": 10.515643754
              },
              {
                "name": "instructions:u",
                "cnt": 151694597341
              },
              {
                "name": "cpu-clock",
                "cnt": 48727.437221
              },
              {
                "name": "cycles:u",
                "cnt": 183745929660
              },
              {
                "name": "faults",
                "cnt": 166582
              },
              {
                "name": "task-clock",
                "cnt": 48727.368295
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          151694597341
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 33381.691331
              },
              {
                "name": "max-rss",
                "cnt": 397664
              },
              {
                "name": "faults",
                "cnt": 129374
              },
              {
                "name": "instructions:u",
                "cnt": 93449603050
              },
              {
                "name": "task-clock",
                "cnt": 33381.616277
              },
              {
                "name": "cycles:u",
                "cnt": 125616711538
              },
              {
                "name": "wall-time",
                "cnt": 7.458270287
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          93449603050
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5429665428
              },
              {
                "name": "cycles:u",
                "cnt": 4566437425
              },
              {
                "name": "task-clock",
                "cnt": 1262.576866
              },
              {
                "name": "cpu-clock",
                "cnt": 1262.521423
              },
              {
                "name": "max-rss",
                "cnt": 357460
              },
              {
                "name": "faults",
                "cnt": 66538
              },
              {
                "name": "wall-time",
                "cnt": 1.213759253
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          5429665428
        ]
      ],
      "regression-31157": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 8480448240
              },
              {
                "name": "instructions:u",
                "cnt": 8106794753
              },
              {
                "name": "max-rss",
                "cnt": 195236
              },
              {
                "name": "faults",
                "cnt": 31945
              },
              {
                "name": "cpu-clock",
                "cnt": 2274.395945
              },
              {
                "name": "task-clock",
                "cnt": 2274.381692
              },
              {
                "name": "wall-time",
                "cnt": 1.039298623
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          8106794753
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 8717680810
              },
              {
                "name": "max-rss",
                "cnt": 189812
              },
              {
                "name": "task-clock",
                "cnt": 2264.824485
              },
              {
                "name": "cycles:u",
                "cnt": 8488181649
              },
              {
                "name": "faults",
                "cnt": 30217
              },
              {
                "name": "cpu-clock",
                "cnt": 2264.835269
              },
              {
                "name": "wall-time",
                "cnt": 1.088117376
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          8717680810
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 211800
              },
              {
                "name": "task-clock",
                "cnt": 2528.17723
              },
              {
                "name": "faults",
                "cnt": 39875
              },
              {
                "name": "cpu-clock",
                "cnt": 2528.173348
              },
              {
                "name": "instructions:u",
                "cnt": 9123608182
              },
              {
                "name": "wall-time",
                "cnt": 1.176018339
              },
              {
                "name": "cycles:u",
                "cnt": 9385231492
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          9123608182
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1052096018
              },
              {
                "name": "instructions:u",
                "cnt": 1277155945
              },
              {
                "name": "cpu-clock",
                "cnt": 307.195126
              },
              {
                "name": "task-clock",
                "cnt": 307.208306
              },
              {
                "name": "faults",
                "cnt": 20197
              },
              {
                "name": "max-rss",
                "cnt": 180680
              },
              {
                "name": "wall-time",
                "cnt": 0.301112164
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1277155945
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 348.387019
              },
              {
                "name": "cpu-clock",
                "cnt": 348.357653
              },
              {
                "name": "instructions:u",
                "cnt": 1459526409
              },
              {
                "name": "cycles:u",
                "cnt": 1199314193
              },
              {
                "name": "faults",
                "cnt": 21261
              },
              {
                "name": "wall-time",
                "cnt": 0.320722868
              },
              {
                "name": "max-rss",
                "cnt": 190948
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1459526409
        ]
      ],
      "tokio-webpush-simple-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 292044
              },
              {
                "name": "cpu-clock",
                "cnt": 30192.219701
              },
              {
                "name": "cycles:u",
                "cnt": 113365858968
              },
              {
                "name": "faults",
                "cnt": 126574
              },
              {
                "name": "wall-time",
                "cnt": 5.674852892
              },
              {
                "name": "task-clock",
                "cnt": 30192.205428
              },
              {
                "name": "instructions:u",
                "cnt": 87175376644
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          87175376644
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 30293.20006
              },
              {
                "name": "cycles:u",
                "cnt": 113769816760
              },
              {
                "name": "instructions:u",
                "cnt": 87890395769
              },
              {
                "name": "faults",
                "cnt": 127324
              },
              {
                "name": "max-rss",
                "cnt": 292500
              },
              {
                "name": "wall-time",
                "cnt": 5.683004061
              },
              {
                "name": "task-clock",
                "cnt": 30293.184684
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          87890395769
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 24199.446649
              },
              {
                "name": "instructions:u",
                "cnt": 66192196532
              },
              {
                "name": "cpu-clock",
                "cnt": 24199.487558
              },
              {
                "name": "max-rss",
                "cnt": 334240
              },
              {
                "name": "cycles:u",
                "cnt": 90621322014
              },
              {
                "name": "wall-time",
                "cnt": 4.499980195
              },
              {
                "name": "faults",
                "cnt": 112005
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          66192196532
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 3347365836
              },
              {
                "name": "max-rss",
                "cnt": 299568
              },
              {
                "name": "instructions:u",
                "cnt": 3980098473
              },
              {
                "name": "task-clock",
                "cnt": 1015.347019
              },
              {
                "name": "cpu-clock",
                "cnt": 1015.293293
              },
              {
                "name": "wall-time",
                "cnt": 0.984109657
              },
              {
                "name": "faults",
                "cnt": 73419
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3980098473
        ],
        [
          "patched incremental: minor change-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.142774824
              },
              {
                "name": "cycles:u",
                "cnt": 89838926896
              },
              {
                "name": "cpu-clock",
                "cnt": 24008.887029
              },
              {
                "name": "task-clock",
                "cnt": 24008.860875
              },
              {
                "name": "instructions:u",
                "cnt": 64600476041
              },
              {
                "name": "max-rss",
                "cnt": 338204
              },
              {
                "name": "faults",
                "cnt": 114175
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          64600476041
        ]
      ],
      "helloworld-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 87.595663
              },
              {
                "name": "cycles:u",
                "cnt": 295321199
              },
              {
                "name": "cpu-clock",
                "cnt": 87.585922
              },
              {
                "name": "wall-time",
                "cnt": 0.093614761
              },
              {
                "name": "faults",
                "cnt": 5635
              },
              {
                "name": "instructions:u",
                "cnt": 336448128
              },
              {
                "name": "max-rss",
                "cnt": 103408
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          336448128
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 337523542
              },
              {
                "name": "wall-time",
                "cnt": 0.093889294
              },
              {
                "name": "cpu-clock",
                "cnt": 87.402108
              },
              {
                "name": "max-rss",
                "cnt": 103396
              },
              {
                "name": "task-clock",
                "cnt": 87.394118
              },
              {
                "name": "faults",
                "cnt": 5641
              },
              {
                "name": "cycles:u",
                "cnt": 294791288
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          337523542
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 94.447137
              },
              {
                "name": "cpu-clock",
                "cnt": 94.44642
              },
              {
                "name": "max-rss",
                "cnt": 110208
              },
              {
                "name": "wall-time",
                "cnt": 0.100041116
              },
              {
                "name": "instructions:u",
                "cnt": 365299710
              },
              {
                "name": "cycles:u",
                "cnt": 316798109
              },
              {
                "name": "faults",
                "cnt": 6857
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          365299710
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 276108505
              },
              {
                "name": "task-clock",
                "cnt": 82.455904
              },
              {
                "name": "faults",
                "cnt": 5945
              },
              {
                "name": "instructions:u",
                "cnt": 313076407
              },
              {
                "name": "max-rss",
                "cnt": 90284
              },
              {
                "name": "wall-time",
                "cnt": 0.103081584
              },
              {
                "name": "cpu-clock",
                "cnt": 82.454433
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          313076407
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 110356
              },
              {
                "name": "task-clock",
                "cnt": 94.494714
              },
              {
                "name": "instructions:u",
                "cnt": 358449276
              },
              {
                "name": "cycles:u",
                "cnt": 312544915
              },
              {
                "name": "faults",
                "cnt": 6950
              },
              {
                "name": "wall-time",
                "cnt": 0.100034027
              },
              {
                "name": "cpu-clock",
                "cnt": 94.493412
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          358449276
        ]
      ],
      "issue-46449": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1092753667
              },
              {
                "name": "faults",
                "cnt": 10418
              },
              {
                "name": "task-clock",
                "cnt": 285.113035
              },
              {
                "name": "wall-time",
                "cnt": 0.18811346
              },
              {
                "name": "cycles:u",
                "cnt": 1008967093
              },
              {
                "name": "cpu-clock",
                "cnt": 285.15566
              },
              {
                "name": "max-rss",
                "cnt": 144724
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1092753667
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 144976
              },
              {
                "name": "cycles:u",
                "cnt": 1022939074
              },
              {
                "name": "instructions:u",
                "cnt": 1100876091
              },
              {
                "name": "wall-time",
                "cnt": 0.188504887
              },
              {
                "name": "cpu-clock",
                "cnt": 287.88902
              },
              {
                "name": "faults",
                "cnt": 10438
              },
              {
                "name": "task-clock",
                "cnt": 287.895411
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1100876091
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 323.001459
              },
              {
                "name": "cpu-clock",
                "cnt": 322.983807
              },
              {
                "name": "cycles:u",
                "cnt": 1133435794
              },
              {
                "name": "faults",
                "cnt": 12607
              },
              {
                "name": "wall-time",
                "cnt": 0.213718168
              },
              {
                "name": "max-rss",
                "cnt": 154508
              },
              {
                "name": "instructions:u",
                "cnt": 1242030634
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1242030634
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 539136469
              },
              {
                "name": "max-rss",
                "cnt": 139768
              },
              {
                "name": "cpu-clock",
                "cnt": 135.86049
              },
              {
                "name": "task-clock",
                "cnt": 135.882712
              },
              {
                "name": "faults",
                "cnt": 10213
              },
              {
                "name": "cycles:u",
                "cnt": 446811451
              },
              {
                "name": "wall-time",
                "cnt": 0.137654166
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          539136469
        ],
        [
          "patched incremental: io error 6144",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.201530546
              },
              {
                "name": "instructions:u",
                "cnt": 1171761325
              },
              {
                "name": "task-clock",
                "cnt": 312.887862
              },
              {
                "name": "faults",
                "cnt": 13014
              },
              {
                "name": "cycles:u",
                "cnt": 1097536780
              },
              {
                "name": "max-rss",
                "cnt": 156456
              },
              {
                "name": "cpu-clock",
                "cnt": 312.88068
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          1171761325
        ],
        [
          "patched incremental: u32 3072",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 297.497954
              },
              {
                "name": "wall-time",
                "cnt": 0.189902816
              },
              {
                "name": "instructions:u",
                "cnt": 1097597603
              },
              {
                "name": "cycles:u",
                "cnt": 1034527057
              },
              {
                "name": "cpu-clock",
                "cnt": 297.500939
              },
              {
                "name": "faults",
                "cnt": 13123
              },
              {
                "name": "max-rss",
                "cnt": 156532
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          1097597603
        ],
        [
          "patched incremental: u8 3072",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 285.141415
              },
              {
                "name": "faults",
                "cnt": 13010
              },
              {
                "name": "instructions:u",
                "cnt": 1031345310
              },
              {
                "name": "max-rss",
                "cnt": 155864
              },
              {
                "name": "cpu-clock",
                "cnt": 285.143064
              },
              {
                "name": "wall-time",
                "cnt": 0.177946241
              },
              {
                "name": "cycles:u",
                "cnt": 992268947
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          1031345310
        ],
        [
          "patched incremental: empty 3072",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1041517930
              },
              {
                "name": "faults",
                "cnt": 13352
              },
              {
                "name": "cpu-clock",
                "cnt": 301.355401
              },
              {
                "name": "task-clock",
                "cnt": 301.336166
              },
              {
                "name": "instructions:u",
                "cnt": 1095456672
              },
              {
                "name": "wall-time",
                "cnt": 0.191620197
              },
              {
                "name": "max-rss",
                "cnt": 157396
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          1095456672
        ],
        [
          "patched incremental: static str 6144",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1108205231
              },
              {
                "name": "faults",
                "cnt": 12841
              },
              {
                "name": "task-clock",
                "cnt": 300.468176
              },
              {
                "name": "cycles:u",
                "cnt": 1045735658
              },
              {
                "name": "cpu-clock",
                "cnt": 300.472708
              },
              {
                "name": "max-rss",
                "cnt": 155816
              },
              {
                "name": "wall-time",
                "cnt": 0.193306761
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          1108205231
        ]
      ],
      "tuple-stress-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4690.493715
              },
              {
                "name": "max-rss",
                "cnt": 395504
              },
              {
                "name": "instructions:u",
                "cnt": 28128970672
              },
              {
                "name": "task-clock",
                "cnt": 4690.502597
              },
              {
                "name": "wall-time",
                "cnt": 4.668041108
              },
              {
                "name": "cycles:u",
                "cnt": 18048709418
              },
              {
                "name": "faults",
                "cnt": 124171
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          28128970672
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 140134
              },
              {
                "name": "max-rss",
                "cnt": 405664
              },
              {
                "name": "instructions:u",
                "cnt": 34748412998
              },
              {
                "name": "cycles:u",
                "cnt": 20956619490
              },
              {
                "name": "wall-time",
                "cnt": 5.412356157
              },
              {
                "name": "task-clock",
                "cnt": 5446.99513
              },
              {
                "name": "cpu-clock",
                "cnt": 5446.995667
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          34748412998
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 100710
              },
              {
                "name": "instructions:u",
                "cnt": 9786848609
              },
              {
                "name": "cpu-clock",
                "cnt": 1711.587443
              },
              {
                "name": "cycles:u",
                "cnt": 6173932689
              },
              {
                "name": "max-rss",
                "cnt": 337408
              },
              {
                "name": "task-clock",
                "cnt": 1711.598932
              },
              {
                "name": "wall-time",
                "cnt": 1.711543227
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          9786848609
        ],
        [
          "patched incremental: new row-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5448.039552
              },
              {
                "name": "task-clock",
                "cnt": 5448.028075
              },
              {
                "name": "max-rss",
                "cnt": 426924
              },
              {
                "name": "cycles:u",
                "cnt": 20809793129
              },
              {
                "name": "faults",
                "cnt": 146739
              },
              {
                "name": "wall-time",
                "cnt": 5.411053822
              },
              {
                "name": "instructions:u",
                "cnt": 34693444546
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          34693444546
        ]
      ],
      "html5ever-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 9217.72589
              },
              {
                "name": "cpu-clock",
                "cnt": 9217.737826
              },
              {
                "name": "max-rss",
                "cnt": 280376
              },
              {
                "name": "faults",
                "cnt": 105856
              },
              {
                "name": "wall-time",
                "cnt": 3.658062968
              },
              {
                "name": "cycles:u",
                "cnt": 34576674583
              },
              {
                "name": "instructions:u",
                "cnt": 34966840535
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          34966840535
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 7614.597563
              },
              {
                "name": "instructions:u",
                "cnt": 31576972011
              },
              {
                "name": "max-rss",
                "cnt": 329304
              },
              {
                "name": "cycles:u",
                "cnt": 28892928690
              },
              {
                "name": "cpu-clock",
                "cnt": 7614.613944
              },
              {
                "name": "faults",
                "cnt": 82342
              },
              {
                "name": "wall-time",
                "cnt": 3.723247477
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          31576972011
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1157.625704
              },
              {
                "name": "max-rss",
                "cnt": 282912
              },
              {
                "name": "instructions:u",
                "cnt": 6626597771
              },
              {
                "name": "faults",
                "cnt": 58764
              },
              {
                "name": "wall-time",
                "cnt": 1.136373396
              },
              {
                "name": "cpu-clock",
                "cnt": 1157.585201
              },
              {
                "name": "cycles:u",
                "cnt": 4245233726
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          6626597771
        ]
      ],
      "inflate-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 382459
              },
              {
                "name": "max-rss",
                "cnt": 287824
              },
              {
                "name": "task-clock",
                "cnt": 15351.262224
              },
              {
                "name": "cpu-clock",
                "cnt": 15351.273787
              },
              {
                "name": "cycles:u",
                "cnt": 59735185319
              },
              {
                "name": "instructions:u",
                "cnt": 92515132174
              },
              {
                "name": "wall-time",
                "cnt": 15.036918099
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          92515132174
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 24240.789185
              },
              {
                "name": "instructions:u",
                "cnt": 180097971295
              },
              {
                "name": "faults",
                "cnt": 731327
              },
              {
                "name": "wall-time",
                "cnt": 23.927769643
              },
              {
                "name": "cycles:u",
                "cnt": 93816914943
              },
              {
                "name": "max-rss",
                "cnt": 437096
              },
              {
                "name": "task-clock",
                "cnt": 24240.806025
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          180097971295
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 53777094572
              },
              {
                "name": "cpu-clock",
                "cnt": 13780.835862
              },
              {
                "name": "task-clock",
                "cnt": 13780.833743
              },
              {
                "name": "faults",
                "cnt": 299673
              },
              {
                "name": "wall-time",
                "cnt": 13.481789891
              },
              {
                "name": "instructions:u",
                "cnt": 83865661824
              },
              {
                "name": "max-rss",
                "cnt": 305136
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          83865661824
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.434348809
              },
              {
                "name": "max-rss",
                "cnt": 272392
              },
              {
                "name": "cycles:u",
                "cnt": 1464152132
              },
              {
                "name": "cpu-clock",
                "cnt": 438.858814
              },
              {
                "name": "faults",
                "cnt": 57966
              },
              {
                "name": "instructions:u",
                "cnt": 2093743788
              },
              {
                "name": "task-clock",
                "cnt": 438.877625
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          2093743788
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 54620413337
              },
              {
                "name": "instructions:u",
                "cnt": 85085097923
              },
              {
                "name": "faults",
                "cnt": 383448
              },
              {
                "name": "task-clock",
                "cnt": 14062.27732
              },
              {
                "name": "cpu-clock",
                "cnt": 14062.275233
              },
              {
                "name": "max-rss",
                "cnt": 311664
              },
              {
                "name": "wall-time",
                "cnt": 13.768435034
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          85085097923
        ]
      ],
      "tuple-stress": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4711.733608
              },
              {
                "name": "instructions:u",
                "cnt": 28141538960
              },
              {
                "name": "faults",
                "cnt": 125054
              },
              {
                "name": "max-rss",
                "cnt": 395496
              },
              {
                "name": "task-clock",
                "cnt": 4711.740131
              },
              {
                "name": "wall-time",
                "cnt": 4.675576519
              },
              {
                "name": "cycles:u",
                "cnt": 18106934953
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          28141538960
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 34831702554
              },
              {
                "name": "cycles:u",
                "cnt": 21019298095
              },
              {
                "name": "faults",
                "cnt": 141379
              },
              {
                "name": "max-rss",
                "cnt": 405532
              },
              {
                "name": "cpu-clock",
                "cnt": 5467.300802
              },
              {
                "name": "task-clock",
                "cnt": 5467.301328
              },
              {
                "name": "wall-time",
                "cnt": 5.427503338
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          34831702554
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1717.192348
              },
              {
                "name": "task-clock",
                "cnt": 1717.20634
              },
              {
                "name": "faults",
                "cnt": 100941
              },
              {
                "name": "instructions:u",
                "cnt": 9842447037
              },
              {
                "name": "wall-time",
                "cnt": 1.717608345
              },
              {
                "name": "max-rss",
                "cnt": 335988
              },
              {
                "name": "cycles:u",
                "cnt": 6247261242
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          9842447037
        ],
        [
          "patched incremental: new row",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 5.425450686
              },
              {
                "name": "faults",
                "cnt": 147928
              },
              {
                "name": "instructions:u",
                "cnt": 34753361141
              },
              {
                "name": "cycles:u",
                "cnt": 20812579166
              },
              {
                "name": "max-rss",
                "cnt": 426792
              },
              {
                "name": "cpu-clock",
                "cnt": 5463.635265
              },
              {
                "name": "task-clock",
                "cnt": 5463.62355
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          34753361141
        ]
      ],
      "parser-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.140351778
              },
              {
                "name": "faults",
                "cnt": 7252
              },
              {
                "name": "task-clock",
                "cnt": 134.271569
              },
              {
                "name": "cpu-clock",
                "cnt": 134.270224
              },
              {
                "name": "max-rss",
                "cnt": 118816
              },
              {
                "name": "cycles:u",
                "cnt": 471174071
              },
              {
                "name": "instructions:u",
                "cnt": 567873664
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          567873664
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 856151407
              },
              {
                "name": "cycles:u",
                "cnt": 601782135
              },
              {
                "name": "cpu-clock",
                "cnt": 167.31584
              },
              {
                "name": "faults",
                "cnt": 7628
              },
              {
                "name": "task-clock",
                "cnt": 167.316398
              },
              {
                "name": "wall-time",
                "cnt": 0.172909572
              },
              {
                "name": "max-rss",
                "cnt": 120672
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          856151407
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 128768
              },
              {
                "name": "wall-time",
                "cnt": 0.162364201
              },
              {
                "name": "task-clock",
                "cnt": 155.054232
              },
              {
                "name": "instructions:u",
                "cnt": 666784508
              },
              {
                "name": "faults",
                "cnt": 9356
              },
              {
                "name": "cycles:u",
                "cnt": 546342893
              },
              {
                "name": "cpu-clock",
                "cnt": 155.053171
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          666784508
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 385275480
              },
              {
                "name": "task-clock",
                "cnt": 114.94371
              },
              {
                "name": "cpu-clock",
                "cnt": 114.942704
              },
              {
                "name": "wall-time",
                "cnt": 0.120124714
              },
              {
                "name": "instructions:u",
                "cnt": 450195401
              },
              {
                "name": "faults",
                "cnt": 9043
              },
              {
                "name": "max-rss",
                "cnt": 122436
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          450195401
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 121552
              },
              {
                "name": "faults",
                "cnt": 8827
              },
              {
                "name": "cpu-clock",
                "cnt": 111.517458
              },
              {
                "name": "wall-time",
                "cnt": 0.115879984
              },
              {
                "name": "instructions:u",
                "cnt": 447051269
              },
              {
                "name": "cycles:u",
                "cnt": 373176375
              },
              {
                "name": "task-clock",
                "cnt": 111.518406
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          447051269
        ]
      ],
      "unused-warnings-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1404509825
              },
              {
                "name": "max-rss",
                "cnt": 135820
              },
              {
                "name": "task-clock",
                "cnt": 387.234275
              },
              {
                "name": "faults",
                "cnt": 26971
              },
              {
                "name": "instructions:u",
                "cnt": 1986587599
              },
              {
                "name": "cpu-clock",
                "cnt": 387.233908
              },
              {
                "name": "wall-time",
                "cnt": 0.392824187
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          1986587599
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 387.153003
              },
              {
                "name": "instructions:u",
                "cnt": 1986625993
              },
              {
                "name": "task-clock",
                "cnt": 387.153297
              },
              {
                "name": "wall-time",
                "cnt": 0.392758797
              },
              {
                "name": "max-rss",
                "cnt": 135292
              },
              {
                "name": "cycles:u",
                "cnt": 1397733441
              },
              {
                "name": "faults",
                "cnt": 27098
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          1986625993
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 588.497791
              },
              {
                "name": "faults",
                "cnt": 49925
              },
              {
                "name": "wall-time",
                "cnt": 0.594008815
              },
              {
                "name": "cycles:u",
                "cnt": 2093480489
              },
              {
                "name": "max-rss",
                "cnt": 205204
              },
              {
                "name": "cpu-clock",
                "cnt": 588.496933
              },
              {
                "name": "instructions:u",
                "cnt": 2946338942
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          2946338942
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 205332
              },
              {
                "name": "wall-time",
                "cnt": 0.578423328
              },
              {
                "name": "cycles:u",
                "cnt": 2119521937
              },
              {
                "name": "task-clock",
                "cnt": 597.568997
              },
              {
                "name": "instructions:u",
                "cnt": 2740136359
              },
              {
                "name": "cpu-clock",
                "cnt": 597.560499
              },
              {
                "name": "faults",
                "cnt": 52650
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2740136359
        ],
        [
          "patched incremental: dummy fn-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 51594
              },
              {
                "name": "max-rss",
                "cnt": 219820
              },
              {
                "name": "task-clock",
                "cnt": 598.280349
              },
              {
                "name": "instructions:u",
                "cnt": 2745382056
              },
              {
                "name": "wall-time",
                "cnt": 0.578461156
              },
              {
                "name": "cycles:u",
                "cnt": 2099117322
              },
              {
                "name": "cpu-clock",
                "cnt": 598.2806
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          2745382056
        ]
      ],
      "inflate-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 68195
              },
              {
                "name": "instructions:u",
                "cnt": 15709293426
              },
              {
                "name": "cycles:u",
                "cnt": 8158015236
              },
              {
                "name": "max-rss",
                "cnt": 287676
              },
              {
                "name": "wall-time",
                "cnt": 2.126494485
              },
              {
                "name": "task-clock",
                "cnt": 2120.514406
              },
              {
                "name": "cpu-clock",
                "cnt": 2120.514121
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          15709293426
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 17.730185251
              },
              {
                "name": "max-rss",
                "cnt": 554136
              },
              {
                "name": "instructions:u",
                "cnt": 166101390088
              },
              {
                "name": "faults",
                "cnt": 215049
              },
              {
                "name": "cpu-clock",
                "cnt": 17724.083405
              },
              {
                "name": "task-clock",
                "cnt": 17724.081496
              },
              {
                "name": "cycles:u",
                "cnt": 69899614958
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          166101390088
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2268.448104
              },
              {
                "name": "max-rss",
                "cnt": 305016
              },
              {
                "name": "faults",
                "cnt": 73708
              },
              {
                "name": "instructions:u",
                "cnt": 16628848104
              },
              {
                "name": "task-clock",
                "cnt": 2268.447803
              },
              {
                "name": "cycles:u",
                "cnt": 8722559946
              },
              {
                "name": "wall-time",
                "cnt": 2.274326906
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          16628848104
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 359.35418
              },
              {
                "name": "instructions:u",
                "cnt": 1679127437
              },
              {
                "name": "max-rss",
                "cnt": 269992
              },
              {
                "name": "cycles:u",
                "cnt": 1192074164
              },
              {
                "name": "task-clock",
                "cnt": 359.353202
              },
              {
                "name": "faults",
                "cnt": 53324
              },
              {
                "name": "wall-time",
                "cnt": 0.360123473
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1679127437
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2237.074058
              },
              {
                "name": "faults",
                "cnt": 75467
              },
              {
                "name": "max-rss",
                "cnt": 310612
              },
              {
                "name": "cpu-clock",
                "cnt": 2237.074017
              },
              {
                "name": "wall-time",
                "cnt": 2.238155432
              },
              {
                "name": "cycles:u",
                "cnt": 8583396818
              },
              {
                "name": "instructions:u",
                "cnt": 16471446355
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          16471446355
        ]
      ],
      "syn-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 252752
              },
              {
                "name": "wall-time",
                "cnt": 3.869581633
              },
              {
                "name": "instructions:u",
                "cnt": 56198686135
              },
              {
                "name": "task-clock",
                "cnt": 19317.178383
              },
              {
                "name": "cycles:u",
                "cnt": 72676048590
              },
              {
                "name": "cpu-clock",
                "cnt": 19317.199133
              },
              {
                "name": "faults",
                "cnt": 69268
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          56198686135
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 60315425309
              },
              {
                "name": "max-rss",
                "cnt": 254328
              },
              {
                "name": "wall-time",
                "cnt": 4.361341354
              },
              {
                "name": "cpu-clock",
                "cnt": 19633.438297
              },
              {
                "name": "faults",
                "cnt": 69343
              },
              {
                "name": "cycles:u",
                "cnt": 74073411069
              },
              {
                "name": "task-clock",
                "cnt": 19633.419354
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          60315425309
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12328.143008
              },
              {
                "name": "task-clock",
                "cnt": 12328.1135
              },
              {
                "name": "faults",
                "cnt": 65037
              },
              {
                "name": "instructions:u",
                "cnt": 36640658408
              },
              {
                "name": "cycles:u",
                "cnt": 46372804617
              },
              {
                "name": "max-rss",
                "cnt": 294868
              },
              {
                "name": "wall-time",
                "cnt": 2.96248065
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          36640658408
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 257616
              },
              {
                "name": "task-clock",
                "cnt": 674.494323
              },
              {
                "name": "faults",
                "cnt": 41671
              },
              {
                "name": "wall-time",
                "cnt": 0.65724368
              },
              {
                "name": "cycles:u",
                "cnt": 2421054095
              },
              {
                "name": "cpu-clock",
                "cnt": 674.468855
              },
              {
                "name": "instructions:u",
                "cnt": 3044123389
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3044123389
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 827.468504
              },
              {
                "name": "cpu-clock",
                "cnt": 827.441265
              },
              {
                "name": "max-rss",
                "cnt": 270704
              },
              {
                "name": "wall-time",
                "cnt": 0.707054614
              },
              {
                "name": "cycles:u",
                "cnt": 2973893310
              },
              {
                "name": "faults",
                "cnt": 43055
              },
              {
                "name": "instructions:u",
                "cnt": 3661230037
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3661230037
        ],
        [
          "patched incremental: nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12728.127796
              },
              {
                "name": "faults",
                "cnt": 71317
              },
              {
                "name": "wall-time",
                "cnt": 3.326036302
              },
              {
                "name": "instructions:u",
                "cnt": 40367847279
              },
              {
                "name": "cycles:u",
                "cnt": 47905893342
              },
              {
                "name": "max-rss",
                "cnt": 309932
              },
              {
                "name": "task-clock",
                "cnt": 12728.091073
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          40367847279
        ]
      ],
      "style-servo-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 126720710612
              },
              {
                "name": "max-rss",
                "cnt": 1405224
              },
              {
                "name": "instructions:u",
                "cnt": 158820544188
              },
              {
                "name": "faults",
                "cnt": 389623
              },
              {
                "name": "task-clock",
                "cnt": 32246.822581
              },
              {
                "name": "wall-time",
                "cnt": 32.269057811
              },
              {
                "name": "cpu-clock",
                "cnt": 32246.837234
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          158820544188
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 38429.060863
              },
              {
                "name": "wall-time",
                "cnt": 38.452369289
              },
              {
                "name": "task-clock",
                "cnt": 38429.014875
              },
              {
                "name": "max-rss",
                "cnt": 2121944
              },
              {
                "name": "cycles:u",
                "cnt": 150436472056
              },
              {
                "name": "instructions:u",
                "cnt": 191814996374
              },
              {
                "name": "faults",
                "cnt": 588149
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          191814996374
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 16732.717679
              },
              {
                "name": "cycles:u",
                "cnt": 63981504683
              },
              {
                "name": "wall-time",
                "cnt": 16.422151465
              },
              {
                "name": "faults",
                "cnt": 574823
              },
              {
                "name": "cpu-clock",
                "cnt": 16732.725465
              },
              {
                "name": "max-rss",
                "cnt": 2049440
              },
              {
                "name": "instructions:u",
                "cnt": 79322784279
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          79322784279
        ],
        [
          "patched incremental: debugging println-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 24.168881801
              },
              {
                "name": "max-rss",
                "cnt": 2139880
              },
              {
                "name": "faults",
                "cnt": 597635
              },
              {
                "name": "instructions:u",
                "cnt": 119419109150
              },
              {
                "name": "task-clock",
                "cnt": 24504.02154
              },
              {
                "name": "cycles:u",
                "cnt": 94924708149
              },
              {
                "name": "cpu-clock",
                "cnt": 24504.041621
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          119419109150
        ],
        [
          "patched incremental: b9b3e592dd cherry picked-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 29912.692684
              },
              {
                "name": "wall-time",
                "cnt": 29.575056059
              },
              {
                "name": "cycles:u",
                "cnt": 116188894596
              },
              {
                "name": "max-rss",
                "cnt": 2324100
              },
              {
                "name": "faults",
                "cnt": 645149
              },
              {
                "name": "instructions:u",
                "cnt": 143907762578
              },
              {
                "name": "task-clock",
                "cnt": 29912.662642
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          143907762578
        ]
      ],
      "parser-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 317.608248
              },
              {
                "name": "wall-time",
                "cnt": 0.313199913
              },
              {
                "name": "instructions:u",
                "cnt": 1507387452
              },
              {
                "name": "faults",
                "cnt": 21209
              },
              {
                "name": "max-rss",
                "cnt": 139312
              },
              {
                "name": "cpu-clock",
                "cnt": 317.605609
              },
              {
                "name": "cycles:u",
                "cnt": 1034162807
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1507387452
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1173635703
              },
              {
                "name": "instructions:u",
                "cnt": 1795913940
              },
              {
                "name": "task-clock",
                "cnt": 354.216104
              },
              {
                "name": "cpu-clock",
                "cnt": 354.213797
              },
              {
                "name": "wall-time",
                "cnt": 0.346552291
              },
              {
                "name": "faults",
                "cnt": 21347
              },
              {
                "name": "max-rss",
                "cnt": 140200
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1795913940
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 340.278273
              },
              {
                "name": "cpu-clock",
                "cnt": 340.278202
              },
              {
                "name": "faults",
                "cnt": 23313
              },
              {
                "name": "instructions:u",
                "cnt": 1606280276
              },
              {
                "name": "max-rss",
                "cnt": 146624
              },
              {
                "name": "wall-time",
                "cnt": 0.332144294
              },
              {
                "name": "cycles:u",
                "cnt": 1109846442
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1606280276
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 865137202
              },
              {
                "name": "faults",
                "cnt": 22150
              },
              {
                "name": "cpu-clock",
                "cnt": 277.280701
              },
              {
                "name": "max-rss",
                "cnt": 130632
              },
              {
                "name": "instructions:u",
                "cnt": 1294664584
              },
              {
                "name": "task-clock",
                "cnt": 277.274195
              },
              {
                "name": "wall-time",
                "cnt": 0.276834135
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1294664584
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 22011
              },
              {
                "name": "wall-time",
                "cnt": 0.273871613
              },
              {
                "name": "task-clock",
                "cnt": 274.183566
              },
              {
                "name": "instructions:u",
                "cnt": 1290113686
              },
              {
                "name": "cpu-clock",
                "cnt": 274.189495
              },
              {
                "name": "cycles:u",
                "cnt": 857421313
              },
              {
                "name": "max-rss",
                "cnt": 129224
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1290113686
        ]
      ],
      "parser": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1467843652
              },
              {
                "name": "task-clock",
                "cnt": 316.715541
              },
              {
                "name": "wall-time",
                "cnt": 0.310810018
              },
              {
                "name": "cycles:u",
                "cnt": 1013027738
              },
              {
                "name": "faults",
                "cnt": 21297
              },
              {
                "name": "cpu-clock",
                "cnt": 316.711667
              },
              {
                "name": "max-rss",
                "cnt": 137616
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1467843652
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 138468
              },
              {
                "name": "cycles:u",
                "cnt": 1148920302
              },
              {
                "name": "task-clock",
                "cnt": 348.36339
              },
              {
                "name": "wall-time",
                "cnt": 0.341792807
              },
              {
                "name": "cpu-clock",
                "cnt": 348.358799
              },
              {
                "name": "instructions:u",
                "cnt": 1756527833
              },
              {
                "name": "faults",
                "cnt": 21454
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1756527833
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 342.918519
              },
              {
                "name": "cycles:u",
                "cnt": 1109472149
              },
              {
                "name": "instructions:u",
                "cnt": 1595830050
              },
              {
                "name": "faults",
                "cnt": 23532
              },
              {
                "name": "cpu-clock",
                "cnt": 342.91469
              },
              {
                "name": "wall-time",
                "cnt": 0.338335856
              },
              {
                "name": "max-rss",
                "cnt": 148028
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1595830050
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 275.804741
              },
              {
                "name": "task-clock",
                "cnt": 275.813116
              },
              {
                "name": "max-rss",
                "cnt": 129672
              },
              {
                "name": "wall-time",
                "cnt": 0.276908419
              },
              {
                "name": "faults",
                "cnt": 22118
              },
              {
                "name": "cycles:u",
                "cnt": 857706772
              },
              {
                "name": "instructions:u",
                "cnt": 1288802992
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1288802992
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.275965407
              },
              {
                "name": "faults",
                "cnt": 22131
              },
              {
                "name": "task-clock",
                "cnt": 274.608031
              },
              {
                "name": "instructions:u",
                "cnt": 1284279889
              },
              {
                "name": "max-rss",
                "cnt": 129592
              },
              {
                "name": "cpu-clock",
                "cnt": 274.608328
              },
              {
                "name": "cycles:u",
                "cnt": 856788607
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1284279889
        ]
      ],
      "regression-31157-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 30064080544
              },
              {
                "name": "cpu-clock",
                "cnt": 9169.384332
              },
              {
                "name": "cycles:u",
                "cnt": 34956199931
              },
              {
                "name": "task-clock",
                "cnt": 9169.379097
              },
              {
                "name": "wall-time",
                "cnt": 3.430117619
              },
              {
                "name": "faults",
                "cnt": 37665
              },
              {
                "name": "max-rss",
                "cnt": 189832
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          30064080544
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 35057111800
              },
              {
                "name": "faults",
                "cnt": 37530
              },
              {
                "name": "wall-time",
                "cnt": 3.452073727
              },
              {
                "name": "max-rss",
                "cnt": 190068
              },
              {
                "name": "task-clock",
                "cnt": 9196.159636
              },
              {
                "name": "instructions:u",
                "cnt": 30481213906
              },
              {
                "name": "cpu-clock",
                "cnt": 9196.179358
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          30481213906
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 23175636578
              },
              {
                "name": "faults",
                "cnt": 37087
              },
              {
                "name": "cpu-clock",
                "cnt": 6124.167151
              },
              {
                "name": "max-rss",
                "cnt": 218808
              },
              {
                "name": "wall-time",
                "cnt": 2.167661023
              },
              {
                "name": "task-clock",
                "cnt": 6124.153546
              },
              {
                "name": "instructions:u",
                "cnt": 18554792767
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          18554792767
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1280092056
              },
              {
                "name": "cpu-clock",
                "cnt": 309.288563
              },
              {
                "name": "cycles:u",
                "cnt": 1068448598
              },
              {
                "name": "max-rss",
                "cnt": 185188
              },
              {
                "name": "wall-time",
                "cnt": 0.302748115
              },
              {
                "name": "task-clock",
                "cnt": 309.299938
              },
              {
                "name": "faults",
                "cnt": 21625
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1280092056
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 609.854714
              },
              {
                "name": "wall-time",
                "cnt": 0.450332355
              },
              {
                "name": "faults",
                "cnt": 23581
              },
              {
                "name": "instructions:u",
                "cnt": 2563581167
              },
              {
                "name": "max-rss",
                "cnt": 194660
              },
              {
                "name": "cycles:u",
                "cnt": 2230470973
              },
              {
                "name": "task-clock",
                "cnt": 609.897737
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2563581167
        ]
      ],
      "encoding": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2434.203594
              },
              {
                "name": "cpu-clock",
                "cnt": 2434.204181
              },
              {
                "name": "faults",
                "cnt": 35600
              },
              {
                "name": "instructions:u",
                "cnt": 10113427301
              },
              {
                "name": "max-rss",
                "cnt": 219572
              },
              {
                "name": "wall-time",
                "cnt": 1.236364983
              },
              {
                "name": "cycles:u",
                "cnt": 9091403941
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          10113427301
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 12669688345
              },
              {
                "name": "cycles:u",
                "cnt": 10191056573
              },
              {
                "name": "max-rss",
                "cnt": 221436
              },
              {
                "name": "cpu-clock",
                "cnt": 2713.167147
              },
              {
                "name": "wall-time",
                "cnt": 1.511686675
              },
              {
                "name": "task-clock",
                "cnt": 2713.174436
              },
              {
                "name": "faults",
                "cnt": 37756
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          12669688345
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.494992909
              },
              {
                "name": "faults",
                "cnt": 47357
              },
              {
                "name": "instructions:u",
                "cnt": 12260721203
              },
              {
                "name": "cycles:u",
                "cnt": 10795301965
              },
              {
                "name": "cpu-clock",
                "cnt": 2905.979746
              },
              {
                "name": "task-clock",
                "cnt": 2906.017485
              },
              {
                "name": "max-rss",
                "cnt": 245964
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          12260721203
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.38418113
              },
              {
                "name": "instructions:u",
                "cnt": 1786203560
              },
              {
                "name": "cpu-clock",
                "cnt": 401.002835
              },
              {
                "name": "task-clock",
                "cnt": 401.048071
              },
              {
                "name": "cycles:u",
                "cnt": 1376366647
              },
              {
                "name": "faults",
                "cnt": 26044
              },
              {
                "name": "max-rss",
                "cnt": 199424
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1786203560
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1921597203
              },
              {
                "name": "wall-time",
                "cnt": 0.397551559
              },
              {
                "name": "faults",
                "cnt": 26229
              },
              {
                "name": "cpu-clock",
                "cnt": 421.767077
              },
              {
                "name": "task-clock",
                "cnt": 421.79863
              },
              {
                "name": "max-rss",
                "cnt": 204812
              },
              {
                "name": "cycles:u",
                "cnt": 1457659600
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1921597203
        ]
      ],
      "futures-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1830.693431
              },
              {
                "name": "instructions:u",
                "cnt": 7250065904
              },
              {
                "name": "faults",
                "cnt": 19322
              },
              {
                "name": "cycles:u",
                "cnt": 6926114849
              },
              {
                "name": "max-rss",
                "cnt": 171064
              },
              {
                "name": "cpu-clock",
                "cnt": 1830.700541
              },
              {
                "name": "wall-time",
                "cnt": 1.048515176
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          7250065904
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 8258411775
              },
              {
                "name": "task-clock",
                "cnt": 1979.844866
              },
              {
                "name": "max-rss",
                "cnt": 171548
              },
              {
                "name": "cycles:u",
                "cnt": 7515138882
              },
              {
                "name": "cpu-clock",
                "cnt": 1979.853854
              },
              {
                "name": "wall-time",
                "cnt": 1.182104348
              },
              {
                "name": "faults",
                "cnt": 19477
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          8258411775
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 7577412948
              },
              {
                "name": "cpu-clock",
                "cnt": 1860.77912
              },
              {
                "name": "task-clock",
                "cnt": 1860.781585
              },
              {
                "name": "faults",
                "cnt": 28080
              },
              {
                "name": "max-rss",
                "cnt": 217732
              },
              {
                "name": "wall-time",
                "cnt": 1.191647082
              },
              {
                "name": "cycles:u",
                "cnt": 7047220576
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          7577412948
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 380.641113
              },
              {
                "name": "task-clock",
                "cnt": 380.640062
              },
              {
                "name": "faults",
                "cnt": 23825
              },
              {
                "name": "cycles:u",
                "cnt": 1343087402
              },
              {
                "name": "max-rss",
                "cnt": 190636
              },
              {
                "name": "instructions:u",
                "cnt": 1781337301
              },
              {
                "name": "wall-time",
                "cnt": 0.373077407
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1781337301
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 23343
              },
              {
                "name": "max-rss",
                "cnt": 188336
              },
              {
                "name": "wall-time",
                "cnt": 0.363197448
              },
              {
                "name": "instructions:u",
                "cnt": 1769267095
              },
              {
                "name": "cycles:u",
                "cnt": 1310868099
              },
              {
                "name": "cpu-clock",
                "cnt": 371.510798
              },
              {
                "name": "task-clock",
                "cnt": 371.521683
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1769267095
        ]
      ],
      "style-servo-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 1922488
              },
              {
                "name": "instructions:u",
                "cnt": 1042868481873
              },
              {
                "name": "task-clock",
                "cnt": 332908.203515
              },
              {
                "name": "cpu-clock",
                "cnt": 332908.408224
              },
              {
                "name": "cycles:u",
                "cnt": 1257710228753
              },
              {
                "name": "faults",
                "cnt": 1372586
              },
              {
                "name": "wall-time",
                "cnt": 83.620930487
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1042868481873
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 1339230
              },
              {
                "name": "max-rss",
                "cnt": 2571956
              },
              {
                "name": "cycles:u",
                "cnt": 1187335568956
              },
              {
                "name": "wall-time",
                "cnt": 78.54631123
              },
              {
                "name": "task-clock",
                "cnt": 314592.417615
              },
              {
                "name": "instructions:u",
                "cnt": 932323872606
              },
              {
                "name": "cpu-clock",
                "cnt": 314592.924922
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          932323872606
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 851930
              },
              {
                "name": "cpu-clock",
                "cnt": 34171.049673
              },
              {
                "name": "wall-time",
                "cnt": 23.671050741
              },
              {
                "name": "max-rss",
                "cnt": 2853108
              },
              {
                "name": "instructions:u",
                "cnt": 154766058353
              },
              {
                "name": "cycles:u",
                "cnt": 129756320168
              },
              {
                "name": "task-clock",
                "cnt": 34171.449565
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          154766058353
        ],
        [
          "patched incremental: debugging println-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 790503116145
              },
              {
                "name": "cpu-clock",
                "cnt": 209996.8886
              },
              {
                "name": "max-rss",
                "cnt": 2926376
              },
              {
                "name": "faults",
                "cnt": 1205412
              },
              {
                "name": "instructions:u",
                "cnt": 630332364641
              },
              {
                "name": "task-clock",
                "cnt": 209996.706225
              },
              {
                "name": "wall-time",
                "cnt": 50.944426405
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          630332364641
        ],
        [
          "patched incremental: b9b3e592dd cherry picked-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 1380712
              },
              {
                "name": "max-rss",
                "cnt": 3211100
              },
              {
                "name": "cpu-clock",
                "cnt": 265382.935508
              },
              {
                "name": "task-clock",
                "cnt": 265382.566233
              },
              {
                "name": "instructions:u",
                "cnt": 775156720022
              },
              {
                "name": "wall-time",
                "cnt": 62.096901693
              },
              {
                "name": "cycles:u",
                "cnt": 999164231354
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          775156720022
        ]
      ],
      "piston-image-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 7961799417
              },
              {
                "name": "instructions:u",
                "cnt": 9909612756
              },
              {
                "name": "max-rss",
                "cnt": 220312
              },
              {
                "name": "wall-time",
                "cnt": 2.074997517
              },
              {
                "name": "task-clock",
                "cnt": 2051.430996
              },
              {
                "name": "faults",
                "cnt": 31569
              },
              {
                "name": "cpu-clock",
                "cnt": 2051.430675
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          9909612756
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 33710
              },
              {
                "name": "cycles:u",
                "cnt": 10532910140
              },
              {
                "name": "task-clock",
                "cnt": 2696.36999
              },
              {
                "name": "cpu-clock",
                "cnt": 2696.371097
              },
              {
                "name": "instructions:u",
                "cnt": 15417351019
              },
              {
                "name": "wall-time",
                "cnt": 2.70229568
              },
              {
                "name": "max-rss",
                "cnt": 228360
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          15417351019
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2509.807862
              },
              {
                "name": "max-rss",
                "cnt": 293132
              },
              {
                "name": "faults",
                "cnt": 49628
              },
              {
                "name": "task-clock",
                "cnt": 2509.806872
              },
              {
                "name": "instructions:u",
                "cnt": 12266815681
              },
              {
                "name": "cycles:u",
                "cnt": 9716835249
              },
              {
                "name": "wall-time",
                "cnt": 2.51555446
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          12266815681
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 45964
              },
              {
                "name": "instructions:u",
                "cnt": 3434351906
              },
              {
                "name": "task-clock",
                "cnt": 754.95148
              },
              {
                "name": "wall-time",
                "cnt": 0.739523198
              },
              {
                "name": "max-rss",
                "cnt": 270692
              },
              {
                "name": "cycles:u",
                "cnt": 2733004371
              },
              {
                "name": "cpu-clock",
                "cnt": 754.95121
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          3434351906
        ]
      ],
      "regex-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 264824
              },
              {
                "name": "faults",
                "cnt": 108804
              },
              {
                "name": "cpu-clock",
                "cnt": 29077.001696
              },
              {
                "name": "wall-time",
                "cnt": 5.993544978
              },
              {
                "name": "task-clock",
                "cnt": 29076.969716
              },
              {
                "name": "cycles:u",
                "cnt": 109543542050
              },
              {
                "name": "instructions:u",
                "cnt": 85738281261
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          85738281261
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 29398.91002
              },
              {
                "name": "faults",
                "cnt": 110141
              },
              {
                "name": "task-clock",
                "cnt": 29398.878228
              },
              {
                "name": "cycles:u",
                "cnt": 110840910620
              },
              {
                "name": "instructions:u",
                "cnt": 88853264848
              },
              {
                "name": "wall-time",
                "cnt": 6.459480183
              },
              {
                "name": "max-rss",
                "cnt": 270632
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          88853264848
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 340716
              },
              {
                "name": "task-clock",
                "cnt": 20852.975191
              },
              {
                "name": "faults",
                "cnt": 96793
              },
              {
                "name": "cycles:u",
                "cnt": 78438528127
              },
              {
                "name": "instructions:u",
                "cnt": 60720675199
              },
              {
                "name": "cpu-clock",
                "cnt": 20853.012188
              },
              {
                "name": "wall-time",
                "cnt": 4.519468588
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          60720675199
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.73948213
              },
              {
                "name": "faults",
                "cnt": 45908
              },
              {
                "name": "task-clock",
                "cnt": 765.427707
              },
              {
                "name": "instructions:u",
                "cnt": 3525508060
              },
              {
                "name": "max-rss",
                "cnt": 271200
              },
              {
                "name": "cpu-clock",
                "cnt": 765.40536
              },
              {
                "name": "cycles:u",
                "cnt": 2735426697
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3525508060
        ],
        [
          "patched incremental: compile one-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 10849314123
              },
              {
                "name": "max-rss",
                "cnt": 289792
              },
              {
                "name": "faults",
                "cnt": 51228
              },
              {
                "name": "cpu-clock",
                "cnt": 2443.819864
              },
              {
                "name": "cycles:u",
                "cnt": 9281481888
              },
              {
                "name": "task-clock",
                "cnt": 2443.856988
              },
              {
                "name": "wall-time",
                "cnt": 1.610210904
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          10849314123
        ],
        [
          "patched incremental: is valid cap letter-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 799.86643
              },
              {
                "name": "cpu-clock",
                "cnt": 799.841723
              },
              {
                "name": "instructions:u",
                "cnt": 3704395728
              },
              {
                "name": "faults",
                "cnt": 45557
              },
              {
                "name": "cycles:u",
                "cnt": 2873365467
              },
              {
                "name": "max-rss",
                "cnt": 280024
              },
              {
                "name": "wall-time",
                "cnt": 0.739257739
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          3704395728
        ],
        [
          "patched incremental: expand-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 278628
              },
              {
                "name": "wall-time",
                "cnt": 0.74893487
              },
              {
                "name": "instructions:u",
                "cnt": 3741109687
              },
              {
                "name": "task-clock",
                "cnt": 810.603134
              },
              {
                "name": "faults",
                "cnt": 46096
              },
              {
                "name": "cycles:u",
                "cnt": 2913800354
              },
              {
                "name": "cpu-clock",
                "cnt": 810.565789
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          3741109687
        ],
        [
          "patched incremental: Compiler new-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.60557136
              },
              {
                "name": "faults",
                "cnt": 51990
              },
              {
                "name": "cycles:u",
                "cnt": 9219652155
              },
              {
                "name": "cpu-clock",
                "cnt": 2427.43697
              },
              {
                "name": "max-rss",
                "cnt": 292816
              },
              {
                "name": "instructions:u",
                "cnt": 10878150483
              },
              {
                "name": "task-clock",
                "cnt": 2427.475023
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          10878150483
        ],
        [
          "patched incremental: reverse-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 9241942838
              },
              {
                "name": "instructions:u",
                "cnt": 10873405584
              },
              {
                "name": "cpu-clock",
                "cnt": 2446.245838
              },
              {
                "name": "wall-time",
                "cnt": 1.616335698
              },
              {
                "name": "max-rss",
                "cnt": 292992
              },
              {
                "name": "task-clock",
                "cnt": 2446.272962
              },
              {
                "name": "faults",
                "cnt": 51690
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          10873405584
        ],
        [
          "patched incremental: byte frequencies-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 268044
              },
              {
                "name": "wall-time",
                "cnt": 0.73399819
              },
              {
                "name": "cpu-clock",
                "cnt": 759.159358
              },
              {
                "name": "task-clock",
                "cnt": 759.193379
              },
              {
                "name": "cycles:u",
                "cnt": 2714596835
              },
              {
                "name": "faults",
                "cnt": 44802
              },
              {
                "name": "instructions:u",
                "cnt": 3539451469
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          3539451469
        ],
        [
          "patched incremental: sparse set-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12330.748525
              },
              {
                "name": "faults",
                "cnt": 85206
              },
              {
                "name": "cycles:u",
                "cnt": 46273198728
              },
              {
                "name": "wall-time",
                "cnt": 2.997698931
              },
              {
                "name": "task-clock",
                "cnt": 12330.747804
              },
              {
                "name": "instructions:u",
                "cnt": 40493276048
              },
              {
                "name": "max-rss",
                "cnt": 329448
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          40493276048
        ],
        [
          "patched incremental: Job-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 45855244975
              },
              {
                "name": "cpu-clock",
                "cnt": 12226.591285
              },
              {
                "name": "instructions:u",
                "cnt": 39889206063
              },
              {
                "name": "wall-time",
                "cnt": 2.876421973
              },
              {
                "name": "max-rss",
                "cnt": 329568
              },
              {
                "name": "faults",
                "cnt": 84153
              },
              {
                "name": "task-clock",
                "cnt": 12226.574697
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          39889206063
        ]
      ],
      "serde-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 7148.233334
              },
              {
                "name": "wall-time",
                "cnt": 6.492718574
              },
              {
                "name": "task-clock",
                "cnt": 7148.222657
              },
              {
                "name": "instructions:u",
                "cnt": 40493759403
              },
              {
                "name": "faults",
                "cnt": 57953
              },
              {
                "name": "cycles:u",
                "cnt": 27854173451
              },
              {
                "name": "max-rss",
                "cnt": 299164
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          40493759403
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12573.196871
              },
              {
                "name": "faults",
                "cnt": 59999
              },
              {
                "name": "instructions:u",
                "cnt": 88428817928
              },
              {
                "name": "max-rss",
                "cnt": 308132
              },
              {
                "name": "cycles:u",
                "cnt": 49424252976
              },
              {
                "name": "task-clock",
                "cnt": 12573.199392
              },
              {
                "name": "wall-time",
                "cnt": 11.897621941
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          88428817928
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 45236810784
              },
              {
                "name": "wall-time",
                "cnt": 7.441571262
              },
              {
                "name": "task-clock",
                "cnt": 7906.823531
              },
              {
                "name": "max-rss",
                "cnt": 408316
              },
              {
                "name": "cpu-clock",
                "cnt": 7906.830987
              },
              {
                "name": "faults",
                "cnt": 84253
              },
              {
                "name": "cycles:u",
                "cnt": 30851430362
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          45236810784
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 81903
              },
              {
                "name": "instructions:u",
                "cnt": 8138554814
              },
              {
                "name": "task-clock",
                "cnt": 1724.101634
              },
              {
                "name": "wall-time",
                "cnt": 1.6879826
              },
              {
                "name": "cpu-clock",
                "cnt": 1724.101226
              },
              {
                "name": "cycles:u",
                "cnt": 6402784247
              },
              {
                "name": "max-rss",
                "cnt": 385512
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          8138554814
        ]
      ],
      "deep-vector-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.593528831
              },
              {
                "name": "task-clock",
                "cnt": 1579.790067
              },
              {
                "name": "cycles:u",
                "cnt": 5859242734
              },
              {
                "name": "cpu-clock",
                "cnt": 1579.790132
              },
              {
                "name": "instructions:u",
                "cnt": 9728644515
              },
              {
                "name": "max-rss",
                "cnt": 247940
              },
              {
                "name": "faults",
                "cnt": 108115
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          9728644515
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 9986549791
              },
              {
                "name": "task-clock",
                "cnt": 1618.13879
              },
              {
                "name": "cycles:u",
                "cnt": 5985408131
              },
              {
                "name": "wall-time",
                "cnt": 1.623808041
              },
              {
                "name": "cpu-clock",
                "cnt": 1618.138459
              },
              {
                "name": "faults",
                "cnt": 116167
              },
              {
                "name": "max-rss",
                "cnt": 261380
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          9986549791
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1713.362567
              },
              {
                "name": "task-clock",
                "cnt": 1713.363342
              },
              {
                "name": "faults",
                "cnt": 118087
              },
              {
                "name": "wall-time",
                "cnt": 1.719160532
              },
              {
                "name": "max-rss",
                "cnt": 252624
              },
              {
                "name": "instructions:u",
                "cnt": 10919312877
              },
              {
                "name": "cycles:u",
                "cnt": 6347191445
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          10919312877
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 4107324608
              },
              {
                "name": "cycles:u",
                "cnt": 2444078373
              },
              {
                "name": "faults",
                "cnt": 73213
              },
              {
                "name": "cpu-clock",
                "cnt": 692.284734
              },
              {
                "name": "wall-time",
                "cnt": 0.697564789
              },
              {
                "name": "task-clock",
                "cnt": 692.29504
              },
              {
                "name": "max-rss",
                "cnt": 232752
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          4107324608
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 11115772167
              },
              {
                "name": "cycles:u",
                "cnt": 6403864422
              },
              {
                "name": "max-rss",
                "cnt": 256992
              },
              {
                "name": "cpu-clock",
                "cnt": 1726.211146
              },
              {
                "name": "wall-time",
                "cnt": 1.73139259
              },
              {
                "name": "faults",
                "cnt": 116494
              },
              {
                "name": "task-clock",
                "cnt": 1726.201308
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          11115772167
        ],
        [
          "patched incremental: add vec item-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 11109898193
              },
              {
                "name": "max-rss",
                "cnt": 257076
              },
              {
                "name": "cycles:u",
                "cnt": 6408591232
              },
              {
                "name": "faults",
                "cnt": 119068
              },
              {
                "name": "wall-time",
                "cnt": 1.734100134
              },
              {
                "name": "task-clock",
                "cnt": 1729.053224
              },
              {
                "name": "cpu-clock",
                "cnt": 1729.053048
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          11109898193
        ]
      ],
      "futures": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 4359075525
              },
              {
                "name": "instructions:u",
                "cnt": 5574113294
              },
              {
                "name": "cpu-clock",
                "cnt": 1143.977608
              },
              {
                "name": "max-rss",
                "cnt": 171776
              },
              {
                "name": "task-clock",
                "cnt": 1143.982404
              },
              {
                "name": "wall-time",
                "cnt": 0.948438893
              },
              {
                "name": "faults",
                "cnt": 16855
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          5574113294
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1277.633227
              },
              {
                "name": "wall-time",
                "cnt": 1.089917024
              },
              {
                "name": "cycles:u",
                "cnt": 4890723079
              },
              {
                "name": "task-clock",
                "cnt": 1277.619643
              },
              {
                "name": "max-rss",
                "cnt": 172652
              },
              {
                "name": "instructions:u",
                "cnt": 6581901395
              },
              {
                "name": "faults",
                "cnt": 17061
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          6581901395
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1378.235682
              },
              {
                "name": "max-rss",
                "cnt": 207700
              },
              {
                "name": "cpu-clock",
                "cnt": 1378.252154
              },
              {
                "name": "instructions:u",
                "cnt": 6614926923
              },
              {
                "name": "wall-time",
                "cnt": 1.144207224
              },
              {
                "name": "cycles:u",
                "cnt": 5233317383
              },
              {
                "name": "faults",
                "cnt": 26047
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          6614926923
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 383.216627
              },
              {
                "name": "max-rss",
                "cnt": 190640
              },
              {
                "name": "instructions:u",
                "cnt": 1787938885
              },
              {
                "name": "task-clock",
                "cnt": 383.233273
              },
              {
                "name": "faults",
                "cnt": 23879
              },
              {
                "name": "cycles:u",
                "cnt": 1348711375
              },
              {
                "name": "wall-time",
                "cnt": 0.374264903
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1787938885
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1313123039
              },
              {
                "name": "cpu-clock",
                "cnt": 372.697571
              },
              {
                "name": "wall-time",
                "cnt": 0.363873707
              },
              {
                "name": "task-clock",
                "cnt": 372.714725
              },
              {
                "name": "faults",
                "cnt": 23237
              },
              {
                "name": "instructions:u",
                "cnt": 1776014156
              },
              {
                "name": "max-rss",
                "cnt": 188008
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1776014156
        ]
      ],
      "deeply-nested-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1567537882
              },
              {
                "name": "task-clock",
                "cnt": 327.522994
              },
              {
                "name": "cycles:u",
                "cnt": 1214113556
              },
              {
                "name": "cpu-clock",
                "cnt": 327.529912
              },
              {
                "name": "max-rss",
                "cnt": 135732
              },
              {
                "name": "wall-time",
                "cnt": 0.271680194
              },
              {
                "name": "faults",
                "cnt": 8663
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1567537882
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.274205963
              },
              {
                "name": "instructions:u",
                "cnt": 1570495756
              },
              {
                "name": "cpu-clock",
                "cnt": 330.084445
              },
              {
                "name": "task-clock",
                "cnt": 330.078722
              },
              {
                "name": "faults",
                "cnt": 8700
              },
              {
                "name": "max-rss",
                "cnt": 135724
              },
              {
                "name": "cycles:u",
                "cnt": 1214572065
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1570495756
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 136796
              },
              {
                "name": "wall-time",
                "cnt": 0.265937945
              },
              {
                "name": "faults",
                "cnt": 9906
              },
              {
                "name": "task-clock",
                "cnt": 301.846241
              },
              {
                "name": "instructions:u",
                "cnt": 1394898797
              },
              {
                "name": "cpu-clock",
                "cnt": 301.84361
              },
              {
                "name": "cycles:u",
                "cnt": 1108406094
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1394898797
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 449350478
              },
              {
                "name": "cpu-clock",
                "cnt": 112.177377
              },
              {
                "name": "faults",
                "cnt": 8308
              },
              {
                "name": "cycles:u",
                "cnt": 370751257
              },
              {
                "name": "task-clock",
                "cnt": 112.199738
              },
              {
                "name": "max-rss",
                "cnt": 127740
              },
              {
                "name": "wall-time",
                "cnt": 0.115846365
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          449350478
        ]
      ],
      "html5ever": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 62918
              },
              {
                "name": "instructions:u",
                "cnt": 19043861771
              },
              {
                "name": "max-rss",
                "cnt": 287440
              },
              {
                "name": "wall-time",
                "cnt": 2.745001807
              },
              {
                "name": "cpu-clock",
                "cnt": 3528.939488
              },
              {
                "name": "task-clock",
                "cnt": 3528.928884
              },
              {
                "name": "cycles:u",
                "cnt": 13453704658
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          19043861771
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 3.308854033
              },
              {
                "name": "max-rss",
                "cnt": 323708
              },
              {
                "name": "faults",
                "cnt": 75670
              },
              {
                "name": "instructions:u",
                "cnt": 23066667059
              },
              {
                "name": "task-clock",
                "cnt": 4075.264116
              },
              {
                "name": "cpu-clock",
                "cnt": 4075.231014
              },
              {
                "name": "cycles:u",
                "cnt": 15540426683
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          23066667059
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1140.444716
              },
              {
                "name": "cpu-clock",
                "cnt": 1140.412496
              },
              {
                "name": "instructions:u",
                "cnt": 6611391122
              },
              {
                "name": "faults",
                "cnt": 58346
              },
              {
                "name": "max-rss",
                "cnt": 281796
              },
              {
                "name": "cycles:u",
                "cnt": 4165804686
              },
              {
                "name": "wall-time",
                "cnt": 1.142364273
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          6611391122
        ]
      ],
      "coercions-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.326285521
              },
              {
                "name": "task-clock",
                "cnt": 1340.394944
              },
              {
                "name": "cycles:u",
                "cnt": 4985910876
              },
              {
                "name": "instructions:u",
                "cnt": 9506885036
              },
              {
                "name": "faults",
                "cnt": 49288
              },
              {
                "name": "max-rss",
                "cnt": 188004
              },
              {
                "name": "cpu-clock",
                "cnt": 1340.393262
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          9506885036
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.484958549
              },
              {
                "name": "task-clock",
                "cnt": 1518.782053
              },
              {
                "name": "instructions:u",
                "cnt": 11192381278
              },
              {
                "name": "max-rss",
                "cnt": 206016
              },
              {
                "name": "faults",
                "cnt": 52826
              },
              {
                "name": "cycles:u",
                "cnt": 5688814320
              },
              {
                "name": "cpu-clock",
                "cnt": 1518.781071
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          11192381278
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 162160
              },
              {
                "name": "cpu-clock",
                "cnt": 527.411322
              },
              {
                "name": "faults",
                "cnt": 38710
              },
              {
                "name": "wall-time",
                "cnt": 0.528416641
              },
              {
                "name": "cycles:u",
                "cnt": 1796349241
              },
              {
                "name": "instructions:u",
                "cnt": 3238469428
              },
              {
                "name": "task-clock",
                "cnt": 527.416173
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3238469428
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 650.04156
              },
              {
                "name": "faults",
                "cnt": 45057
              },
              {
                "name": "max-rss",
                "cnt": 190684
              },
              {
                "name": "wall-time",
                "cnt": 0.616158783
              },
              {
                "name": "cycles:u",
                "cnt": 2252466161
              },
              {
                "name": "cpu-clock",
                "cnt": 650.039647
              },
              {
                "name": "instructions:u",
                "cnt": 4003218110
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4003218110
        ],
        [
          "patched incremental: add static arr item-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 53322
              },
              {
                "name": "max-rss",
                "cnt": 198716
              },
              {
                "name": "wall-time",
                "cnt": 1.487690618
              },
              {
                "name": "instructions:u",
                "cnt": 11192864034
              },
              {
                "name": "cycles:u",
                "cnt": 5695290228
              },
              {
                "name": "cpu-clock",
                "cnt": 1521.198777
              },
              {
                "name": "task-clock",
                "cnt": 1521.201586
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          11192864034
        ]
      ],
      "serde-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 23260898172
              },
              {
                "name": "cpu-clock",
                "cnt": 5905.517386
              },
              {
                "name": "faults",
                "cnt": 49228
              },
              {
                "name": "task-clock",
                "cnt": 5905.514819
              },
              {
                "name": "instructions:u",
                "cnt": 35008944914
              },
              {
                "name": "max-rss",
                "cnt": 270440
              },
              {
                "name": "wall-time",
                "cnt": 5.922415866
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          35008944914
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 11299.768396
              },
              {
                "name": "faults",
                "cnt": 52080
              },
              {
                "name": "instructions:u",
                "cnt": 82784049884
              },
              {
                "name": "cycles:u",
                "cnt": 44751266635
              },
              {
                "name": "cpu-clock",
                "cnt": 11299.772172
              },
              {
                "name": "max-rss",
                "cnt": 281984
              },
              {
                "name": "wall-time",
                "cnt": 11.305874172
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          82784049884
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 358632
              },
              {
                "name": "wall-time",
                "cnt": 6.762206935
              },
              {
                "name": "cycles:u",
                "cnt": 26525151343
              },
              {
                "name": "instructions:u",
                "cnt": 39316163553
              },
              {
                "name": "cpu-clock",
                "cnt": 6756.396325
              },
              {
                "name": "task-clock",
                "cnt": 6756.384771
              },
              {
                "name": "faults",
                "cnt": 71662
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          39316163553
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1526.085056
              },
              {
                "name": "max-rss",
                "cnt": 341220
              },
              {
                "name": "wall-time",
                "cnt": 1.50054178
              },
              {
                "name": "cycles:u",
                "cnt": 5704514308
              },
              {
                "name": "instructions:u",
                "cnt": 7105395950
              },
              {
                "name": "faults",
                "cnt": 69973
              },
              {
                "name": "cpu-clock",
                "cnt": 1526.085497
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          7105395950
        ]
      ],
      "tuple-stress-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 13111608942
              },
              {
                "name": "faults",
                "cnt": 93776
              },
              {
                "name": "wall-time",
                "cnt": 3.415200117
              },
              {
                "name": "instructions:u",
                "cnt": 19428514175
              },
              {
                "name": "cpu-clock",
                "cnt": 3396.423446
              },
              {
                "name": "max-rss",
                "cnt": 334392
              },
              {
                "name": "task-clock",
                "cnt": 3396.424342
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          19428514175
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 3927.759819
              },
              {
                "name": "wall-time",
                "cnt": 3.933657742
              },
              {
                "name": "task-clock",
                "cnt": 3927.75897
              },
              {
                "name": "instructions:u",
                "cnt": 23800049471
              },
              {
                "name": "max-rss",
                "cnt": 340012
              },
              {
                "name": "faults",
                "cnt": 97893
              },
              {
                "name": "cycles:u",
                "cnt": 15224725095
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          23800049471
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 248984
              },
              {
                "name": "cpu-clock",
                "cnt": 1256.327695
              },
              {
                "name": "cycles:u",
                "cnt": 4736124861
              },
              {
                "name": "task-clock",
                "cnt": 1256.328017
              },
              {
                "name": "wall-time",
                "cnt": 1.26127763
              },
              {
                "name": "instructions:u",
                "cnt": 7147355884
              },
              {
                "name": "faults",
                "cnt": 59616
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          7147355884
        ],
        [
          "patched incremental: new row-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 108062
              },
              {
                "name": "cpu-clock",
                "cnt": 3939.871711
              },
              {
                "name": "wall-time",
                "cnt": 3.945327535
              },
              {
                "name": "task-clock",
                "cnt": 3939.870896
              },
              {
                "name": "max-rss",
                "cnt": 364244
              },
              {
                "name": "instructions:u",
                "cnt": 23773023639
              },
              {
                "name": "cycles:u",
                "cnt": 15242519243
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          23773023639
        ]
      ],
      "encoding-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 527.368025
              },
              {
                "name": "cycles:u",
                "cnt": 1994154987
              },
              {
                "name": "wall-time",
                "cnt": 0.5388815
              },
              {
                "name": "max-rss",
                "cnt": 159892
              },
              {
                "name": "cpu-clock",
                "cnt": 527.368461
              },
              {
                "name": "faults",
                "cnt": 15369
              },
              {
                "name": "instructions:u",
                "cnt": 2493913095
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          2493913095
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.819844539
              },
              {
                "name": "cpu-clock",
                "cnt": 814.340635
              },
              {
                "name": "max-rss",
                "cnt": 166924
              },
              {
                "name": "cycles:u",
                "cnt": 3123460743
              },
              {
                "name": "task-clock",
                "cnt": 814.3408
              },
              {
                "name": "faults",
                "cnt": 18154
              },
              {
                "name": "instructions:u",
                "cnt": 5086590310
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          5086590310
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 185236
              },
              {
                "name": "wall-time",
                "cnt": 0.695459529
              },
              {
                "name": "cycles:u",
                "cnt": 2515733521
              },
              {
                "name": "cpu-clock",
                "cnt": 666.280116
              },
              {
                "name": "faults",
                "cnt": 21507
              },
              {
                "name": "instructions:u",
                "cnt": 3161543807
              },
              {
                "name": "task-clock",
                "cnt": 666.281802
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          3161543807
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 302.595701
              },
              {
                "name": "faults",
                "cnt": 21132
              },
              {
                "name": "cpu-clock",
                "cnt": 302.595438
              },
              {
                "name": "instructions:u",
                "cnt": 1414907983
              },
              {
                "name": "wall-time",
                "cnt": 0.300457195
              },
              {
                "name": "cycles:u",
                "cnt": 1063445061
              },
              {
                "name": "max-rss",
                "cnt": 178088
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1414907983
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 306.992451
              },
              {
                "name": "wall-time",
                "cnt": 0.326238945
              },
              {
                "name": "instructions:u",
                "cnt": 1471310751
              },
              {
                "name": "cycles:u",
                "cnt": 1089111778
              },
              {
                "name": "task-clock",
                "cnt": 306.982722
              },
              {
                "name": "faults",
                "cnt": 20899
              },
              {
                "name": "max-rss",
                "cnt": 179040
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1471310751
        ]
      ],
      "hyper-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1277.635667
              },
              {
                "name": "cycles:u",
                "cnt": 4918879498
              },
              {
                "name": "max-rss",
                "cnt": 197432
              },
              {
                "name": "wall-time",
                "cnt": 1.284425859
              },
              {
                "name": "instructions:u",
                "cnt": 5798773081
              },
              {
                "name": "faults",
                "cnt": 25815
              },
              {
                "name": "task-clock",
                "cnt": 1277.635182
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5798773081
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 26972
              },
              {
                "name": "wall-time",
                "cnt": 1.699266235
              },
              {
                "name": "task-clock",
                "cnt": 1693.544078
              },
              {
                "name": "max-rss",
                "cnt": 200912
              },
              {
                "name": "instructions:u",
                "cnt": 9240941109
              },
              {
                "name": "cpu-clock",
                "cnt": 1693.544907
              },
              {
                "name": "cycles:u",
                "cnt": 6572049097
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          9240941109
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1626.302583
              },
              {
                "name": "wall-time",
                "cnt": 1.632137185
              },
              {
                "name": "max-rss",
                "cnt": 258000
              },
              {
                "name": "faults",
                "cnt": 40708
              },
              {
                "name": "instructions:u",
                "cnt": 7383077976
              },
              {
                "name": "task-clock",
                "cnt": 1626.303236
              },
              {
                "name": "cycles:u",
                "cnt": 6223514940
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          7383077976
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 669.051972
              },
              {
                "name": "max-rss",
                "cnt": 249124
              },
              {
                "name": "task-clock",
                "cnt": 669.061075
              },
              {
                "name": "cycles:u",
                "cnt": 2426863658
              },
              {
                "name": "faults",
                "cnt": 40482
              },
              {
                "name": "instructions:u",
                "cnt": 3038711674
              },
              {
                "name": "wall-time",
                "cnt": 0.655809009
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          3038711674
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 40156
              },
              {
                "name": "instructions:u",
                "cnt": 3081953500
              },
              {
                "name": "task-clock",
                "cnt": 670.404481
              },
              {
                "name": "wall-time",
                "cnt": 0.661798392
              },
              {
                "name": "cycles:u",
                "cnt": 2436246702
              },
              {
                "name": "cpu-clock",
                "cnt": 670.404099
              },
              {
                "name": "max-rss",
                "cnt": 248840
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3081953500
        ]
      ],
      "unify-linearly-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 303.857516
              },
              {
                "name": "faults",
                "cnt": 20045
              },
              {
                "name": "wall-time",
                "cnt": 0.297479544
              },
              {
                "name": "instructions:u",
                "cnt": 1453778551
              },
              {
                "name": "max-rss",
                "cnt": 131916
              },
              {
                "name": "cycles:u",
                "cnt": 981149885
              },
              {
                "name": "task-clock",
                "cnt": 303.85964
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1453778551
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 304.807611
              },
              {
                "name": "wall-time",
                "cnt": 0.299151201
              },
              {
                "name": "max-rss",
                "cnt": 131916
              },
              {
                "name": "instructions:u",
                "cnt": 1466251077
              },
              {
                "name": "faults",
                "cnt": 20014
              },
              {
                "name": "cycles:u",
                "cnt": 988333514
              },
              {
                "name": "cpu-clock",
                "cnt": 304.81357
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1466251077
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.30818451
              },
              {
                "name": "cpu-clock",
                "cnt": 319.279145
              },
              {
                "name": "instructions:u",
                "cnt": 1519122722
              },
              {
                "name": "task-clock",
                "cnt": 319.280609
              },
              {
                "name": "cycles:u",
                "cnt": 1029938154
              },
              {
                "name": "faults",
                "cnt": 21784
              },
              {
                "name": "max-rss",
                "cnt": 136244
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1519122722
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 261.966648
              },
              {
                "name": "max-rss",
                "cnt": 117304
              },
              {
                "name": "wall-time",
                "cnt": 0.262565953
              },
              {
                "name": "cycles:u",
                "cnt": 812808386
              },
              {
                "name": "faults",
                "cnt": 20636
              },
              {
                "name": "cpu-clock",
                "cnt": 261.951597
              },
              {
                "name": "instructions:u",
                "cnt": 1228937230
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1228937230
        ],
        [
          "patched incremental: dummy fn-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 136416
              },
              {
                "name": "task-clock",
                "cnt": 293.20404
              },
              {
                "name": "faults",
                "cnt": 21790
              },
              {
                "name": "instructions:u",
                "cnt": 1371188654
              },
              {
                "name": "cpu-clock",
                "cnt": 293.202395
              },
              {
                "name": "cycles:u",
                "cnt": 928852050
              },
              {
                "name": "wall-time",
                "cnt": 0.290661388
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          1371188654
        ]
      ],
      "regression-31157-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.26359862
              },
              {
                "name": "task-clock",
                "cnt": 257.964869
              },
              {
                "name": "faults",
                "cnt": 10195
              },
              {
                "name": "cpu-clock",
                "cnt": 257.964806
              },
              {
                "name": "cycles:u",
                "cnt": 946025229
              },
              {
                "name": "instructions:u",
                "cnt": 1208557929
              },
              {
                "name": "max-rss",
                "cnt": 138656
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          1208557929
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10731
              },
              {
                "name": "cycles:u",
                "cnt": 1247475730
              },
              {
                "name": "task-clock",
                "cnt": 334.711527
              },
              {
                "name": "max-rss",
                "cnt": 140036
              },
              {
                "name": "cpu-clock",
                "cnt": 334.711205
              },
              {
                "name": "instructions:u",
                "cnt": 1833993482
              },
              {
                "name": "wall-time",
                "cnt": 0.340745596
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          1833993482
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.320388263
              },
              {
                "name": "cpu-clock",
                "cnt": 314.793367
              },
              {
                "name": "max-rss",
                "cnt": 152176
              },
              {
                "name": "task-clock",
                "cnt": 314.793322
              },
              {
                "name": "instructions:u",
                "cnt": 1497167270
              },
              {
                "name": "faults",
                "cnt": 13365
              },
              {
                "name": "cycles:u",
                "cnt": 1156294316
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          1497167270
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 540202510
              },
              {
                "name": "faults",
                "cnt": 13279
              },
              {
                "name": "wall-time",
                "cnt": 0.163238065
              },
              {
                "name": "instructions:u",
                "cnt": 694343764
              },
              {
                "name": "cpu-clock",
                "cnt": 160.221205
              },
              {
                "name": "max-rss",
                "cnt": 148620
              },
              {
                "name": "task-clock",
                "cnt": 160.221908
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          694343764
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 591375880
              },
              {
                "name": "faults",
                "cnt": 13338
              },
              {
                "name": "wall-time",
                "cnt": 0.176171474
              },
              {
                "name": "task-clock",
                "cnt": 173.726597
              },
              {
                "name": "cpu-clock",
                "cnt": 173.726106
              },
              {
                "name": "instructions:u",
                "cnt": 749754888
              },
              {
                "name": "max-rss",
                "cnt": 152076
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          749754888
        ]
      ],
      "deep-vector": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2419.555288
              },
              {
                "name": "instructions:u",
                "cnt": 14211828668
              },
              {
                "name": "wall-time",
                "cnt": 2.37395437
              },
              {
                "name": "faults",
                "cnt": 167838
              },
              {
                "name": "max-rss",
                "cnt": 263692
              },
              {
                "name": "cycles:u",
                "cnt": 8797629685
              },
              {
                "name": "task-clock",
                "cnt": 2419.572451
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          14211828668
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2475.623593
              },
              {
                "name": "max-rss",
                "cnt": 265888
              },
              {
                "name": "faults",
                "cnt": 175998
              },
              {
                "name": "cycles:u",
                "cnt": 9002107491
              },
              {
                "name": "wall-time",
                "cnt": 2.428289085
              },
              {
                "name": "task-clock",
                "cnt": 2475.623281
              },
              {
                "name": "instructions:u",
                "cnt": 14493141344
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          14493141344
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 15954500853
              },
              {
                "name": "cycles:u",
                "cnt": 9477648145
              },
              {
                "name": "wall-time",
                "cnt": 2.524083589
              },
              {
                "name": "faults",
                "cnt": 179402
              },
              {
                "name": "task-clock",
                "cnt": 2592.082375
              },
              {
                "name": "cpu-clock",
                "cnt": 2592.084865
              },
              {
                "name": "max-rss",
                "cnt": 269624
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          15954500853
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 233492
              },
              {
                "name": "cpu-clock",
                "cnt": 925.491382
              },
              {
                "name": "task-clock",
                "cnt": 925.506739
              },
              {
                "name": "faults",
                "cnt": 92717
              },
              {
                "name": "instructions:u",
                "cnt": 5409821537
              },
              {
                "name": "cycles:u",
                "cnt": 3165113224
              },
              {
                "name": "wall-time",
                "cnt": 0.925650284
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          5409821537
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 272000
              },
              {
                "name": "wall-time",
                "cnt": 2.563183229
              },
              {
                "name": "task-clock",
                "cnt": 2635.731494
              },
              {
                "name": "cpu-clock",
                "cnt": 2635.74696
              },
              {
                "name": "instructions:u",
                "cnt": 16246189926
              },
              {
                "name": "cycles:u",
                "cnt": 9595208053
              },
              {
                "name": "faults",
                "cnt": 176814
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          16246189926
        ],
        [
          "patched incremental: add vec item",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 176943
              },
              {
                "name": "cpu-clock",
                "cnt": 2630.1513
              },
              {
                "name": "max-rss",
                "cnt": 272848
              },
              {
                "name": "task-clock",
                "cnt": 2630.149645
              },
              {
                "name": "instructions:u",
                "cnt": 16163023745
              },
              {
                "name": "wall-time",
                "cnt": 2.55625878
              },
              {
                "name": "cycles:u",
                "cnt": 9615179325
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          16163023745
        ]
      ],
      "syn-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 189956
              },
              {
                "name": "cycles:u",
                "cnt": 3390095203
              },
              {
                "name": "wall-time",
                "cnt": 0.893465339
              },
              {
                "name": "instructions:u",
                "cnt": 4403676748
              },
              {
                "name": "cpu-clock",
                "cnt": 886.749953
              },
              {
                "name": "faults",
                "cnt": 23383
              },
              {
                "name": "task-clock",
                "cnt": 886.749873
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          4403676748
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 5368435917
              },
              {
                "name": "faults",
                "cnt": 23907
              },
              {
                "name": "instructions:u",
                "cnt": 8705676968
              },
              {
                "name": "wall-time",
                "cnt": 1.389397143
              },
              {
                "name": "max-rss",
                "cnt": 191916
              },
              {
                "name": "cpu-clock",
                "cnt": 1383.710381
              },
              {
                "name": "task-clock",
                "cnt": 1383.709556
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          8705676968
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.10083882
              },
              {
                "name": "task-clock",
                "cnt": 1095.197027
              },
              {
                "name": "faults",
                "cnt": 33470
              },
              {
                "name": "max-rss",
                "cnt": 230476
              },
              {
                "name": "cycles:u",
                "cnt": 4175584415
              },
              {
                "name": "cpu-clock",
                "cnt": 1095.205748
              },
              {
                "name": "instructions:u",
                "cnt": 5479989483
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          5479989483
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2360867271
              },
              {
                "name": "wall-time",
                "cnt": 0.495709944
              },
              {
                "name": "cpu-clock",
                "cnt": 501.643657
              },
              {
                "name": "max-rss",
                "cnt": 220868
              },
              {
                "name": "cycles:u",
                "cnt": 1810727432
              },
              {
                "name": "task-clock",
                "cnt": 501.64302
              },
              {
                "name": "faults",
                "cnt": 32726
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2360867271
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 529.186338
              },
              {
                "name": "instructions:u",
                "cnt": 2479869799
              },
              {
                "name": "cpu-clock",
                "cnt": 529.186331
              },
              {
                "name": "faults",
                "cnt": 32694
              },
              {
                "name": "wall-time",
                "cnt": 0.523096693
              },
              {
                "name": "max-rss",
                "cnt": 223224
              },
              {
                "name": "cycles:u",
                "cnt": 1911363897
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2479869799
        ],
        [
          "patched incremental: nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.571877267
              },
              {
                "name": "faults",
                "cnt": 36899
              },
              {
                "name": "cycles:u",
                "cnt": 6073450134
              },
              {
                "name": "cpu-clock",
                "cnt": 1578.207353
              },
              {
                "name": "instructions:u",
                "cnt": 9565287899
              },
              {
                "name": "max-rss",
                "cnt": 240480
              },
              {
                "name": "task-clock",
                "cnt": 1578.18544
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          9565287899
        ]
      ],
      "deeply-nested-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 126.052201
              },
              {
                "name": "wall-time",
                "cnt": 0.132137528
              },
              {
                "name": "cpu-clock",
                "cnt": 126.051458
              },
              {
                "name": "instructions:u",
                "cnt": 570588153
              },
              {
                "name": "faults",
                "cnt": 6526
              },
              {
                "name": "cycles:u",
                "cnt": 435379781
              },
              {
                "name": "max-rss",
                "cnt": 120100
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          570588153
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 6533
              },
              {
                "name": "cycles:u",
                "cnt": 436312014
              },
              {
                "name": "max-rss",
                "cnt": 117688
              },
              {
                "name": "instructions:u",
                "cnt": 574072453
              },
              {
                "name": "cpu-clock",
                "cnt": 124.536942
              },
              {
                "name": "task-clock",
                "cnt": 124.538575
              },
              {
                "name": "wall-time",
                "cnt": 0.130942804
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          574072453
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 139.594423
              },
              {
                "name": "instructions:u",
                "cnt": 633238242
              },
              {
                "name": "task-clock",
                "cnt": 139.594806
              },
              {
                "name": "max-rss",
                "cnt": 127668
              },
              {
                "name": "cycles:u",
                "cnt": 487238170
              },
              {
                "name": "faults",
                "cnt": 8028
              },
              {
                "name": "wall-time",
                "cnt": 0.145270393
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          633238242
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 91.974487
              },
              {
                "name": "faults",
                "cnt": 6958
              },
              {
                "name": "cpu-clock",
                "cnt": 91.984069
              },
              {
                "name": "cycles:u",
                "cnt": 304403867
              },
              {
                "name": "instructions:u",
                "cnt": 360063627
              },
              {
                "name": "wall-time",
                "cnt": 0.096872281
              },
              {
                "name": "max-rss",
                "cnt": 116668
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          360063627
        ]
      ],
      "tokio-webpush-simple-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 439.980248
              },
              {
                "name": "task-clock",
                "cnt": 439.980088
              },
              {
                "name": "instructions:u",
                "cnt": 2150620367
              },
              {
                "name": "cycles:u",
                "cnt": 1606354788
              },
              {
                "name": "max-rss",
                "cnt": 173048
              },
              {
                "name": "wall-time",
                "cnt": 0.445741395
              },
              {
                "name": "faults",
                "cnt": 18011
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          2150620367
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.540492147
              },
              {
                "name": "task-clock",
                "cnt": 534.82258
              },
              {
                "name": "faults",
                "cnt": 18436
              },
              {
                "name": "instructions:u",
                "cnt": 2902539447
              },
              {
                "name": "cpu-clock",
                "cnt": 534.82192
              },
              {
                "name": "max-rss",
                "cnt": 174516
              },
              {
                "name": "cycles:u",
                "cnt": 1981081849
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          2902539447
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 24513
              },
              {
                "name": "max-rss",
                "cnt": 199560
              },
              {
                "name": "task-clock",
                "cnt": 549.881868
              },
              {
                "name": "instructions:u",
                "cnt": 2662350216
              },
              {
                "name": "cycles:u",
                "cnt": 2000042260
              },
              {
                "name": "cpu-clock",
                "cnt": 549.88083
              },
              {
                "name": "wall-time",
                "cnt": 0.55585035
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          2662350216
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 277.268348
              },
              {
                "name": "max-rss",
                "cnt": 191676
              },
              {
                "name": "instructions:u",
                "cnt": 1217356398
              },
              {
                "name": "task-clock",
                "cnt": 277.258931
              },
              {
                "name": "cycles:u",
                "cnt": 931674172
              },
              {
                "name": "faults",
                "cnt": 23751
              },
              {
                "name": "wall-time",
                "cnt": 0.27709921
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1217356398
        ],
        [
          "patched incremental: minor change-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 25109
              },
              {
                "name": "wall-time",
                "cnt": 0.378169642
              },
              {
                "name": "instructions:u",
                "cnt": 1687041722
              },
              {
                "name": "cpu-clock",
                "cnt": 378.421257
              },
              {
                "name": "cycles:u",
                "cnt": 1327230073
              },
              {
                "name": "task-clock",
                "cnt": 378.422226
              },
              {
                "name": "max-rss",
                "cnt": 199808
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          1687041722
        ]
      ]
    }
  },
  "b": {
    "date": "2000-01-01T00:00:00+00:00",
    "commit": "303d989cdce60b2a5981765d43726baf868cbe95",
    "data": {
      "html5ever-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 228644
              },
              {
                "name": "cpu-clock",
                "cnt": 1939.111902
              },
              {
                "name": "faults",
                "cnt": 43995
              },
              {
                "name": "instructions:u",
                "cnt": 11499505938
              },
              {
                "name": "task-clock",
                "cnt": 1939.112104
              },
              {
                "name": "cycles:u",
                "cnt": 7493999426
              },
              {
                "name": "wall-time",
                "cnt": 1.965754872
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          11499505938
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2358.363762
              },
              {
                "name": "cycles:u",
                "cnt": 9071263110
              },
              {
                "name": "wall-time",
                "cnt": 2.377755149
              },
              {
                "name": "faults",
                "cnt": 59326
              },
              {
                "name": "max-rss",
                "cnt": 271280
              },
              {
                "name": "cpu-clock",
                "cnt": 2358.36507
              },
              {
                "name": "instructions:u",
                "cnt": 14473966332
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          14473966332
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 965.480927
              },
              {
                "name": "max-rss",
                "cnt": 253564
              },
              {
                "name": "task-clock",
                "cnt": 965.482073
              },
              {
                "name": "wall-time",
                "cnt": 0.97304553
              },
              {
                "name": "cycles:u",
                "cnt": 3576094330
              },
              {
                "name": "faults",
                "cnt": 48848
              },
              {
                "name": "instructions:u",
                "cnt": 6009868398
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          6009868398
        ]
      ],
      "futures-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1708.207191
              },
              {
                "name": "wall-time",
                "cnt": 0.997412707
              },
              {
                "name": "max-rss",
                "cnt": 168100
              },
              {
                "name": "task-clock",
                "cnt": 1708.209136
              },
              {
                "name": "faults",
                "cnt": 19062
              },
              {
                "name": "cycles:u",
                "cnt": 6460026549
              },
              {
                "name": "instructions:u",
                "cnt": 7084025284
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          7084025284
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.145698618
              },
              {
                "name": "cycles:u",
                "cnt": 6996310781
              },
              {
                "name": "cpu-clock",
                "cnt": 1843.107888
              },
              {
                "name": "max-rss",
                "cnt": 168208
              },
              {
                "name": "instructions:u",
                "cnt": 8130386431
              },
              {
                "name": "faults",
                "cnt": 19285
              },
              {
                "name": "task-clock",
                "cnt": 1843.103951
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          8130386431
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1746.430263
              },
              {
                "name": "wall-time",
                "cnt": 1.149194833
              },
              {
                "name": "cpu-clock",
                "cnt": 1746.425802
              },
              {
                "name": "max-rss",
                "cnt": 212744
              },
              {
                "name": "instructions:u",
                "cnt": 7456227834
              },
              {
                "name": "cycles:u",
                "cnt": 6608997683
              },
              {
                "name": "faults",
                "cnt": 27781
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          7456227834
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 345.375649
              },
              {
                "name": "cpu-clock",
                "cnt": 345.386488
              },
              {
                "name": "max-rss",
                "cnt": 187076
              },
              {
                "name": "faults",
                "cnt": 23742
              },
              {
                "name": "cycles:u",
                "cnt": 1209611498
              },
              {
                "name": "instructions:u",
                "cnt": 1705173658
              },
              {
                "name": "wall-time",
                "cnt": 0.338921822
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1705173658
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 23244
              },
              {
                "name": "cycles:u",
                "cnt": 1187956873
              },
              {
                "name": "instructions:u",
                "cnt": 1693775245
              },
              {
                "name": "task-clock",
                "cnt": 339.797335
              },
              {
                "name": "max-rss",
                "cnt": 185088
              },
              {
                "name": "wall-time",
                "cnt": 0.331198818
              },
              {
                "name": "cpu-clock",
                "cnt": 339.78781
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1693775245
        ]
      ],
      "encoding": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 216660
              },
              {
                "name": "cycles:u",
                "cnt": 8488462674
              },
              {
                "name": "cpu-clock",
                "cnt": 2279.213577
              },
              {
                "name": "instructions:u",
                "cnt": 9712985587
              },
              {
                "name": "wall-time",
                "cnt": 1.168173859
              },
              {
                "name": "task-clock",
                "cnt": 2279.220407
              },
              {
                "name": "faults",
                "cnt": 35912
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          9712985587
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 217304
              },
              {
                "name": "task-clock",
                "cnt": 2515.87589
              },
              {
                "name": "wall-time",
                "cnt": 1.436731517
              },
              {
                "name": "instructions:u",
                "cnt": 12329398607
              },
              {
                "name": "cycles:u",
                "cnt": 9456373802
              },
              {
                "name": "cpu-clock",
                "cnt": 2515.867197
              },
              {
                "name": "faults",
                "cnt": 37172
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          12329398607
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 11911703094
              },
              {
                "name": "cycles:u",
                "cnt": 10172231666
              },
              {
                "name": "cpu-clock",
                "cnt": 2738.747979
              },
              {
                "name": "faults",
                "cnt": 46372
              },
              {
                "name": "wall-time",
                "cnt": 1.439025737
              },
              {
                "name": "max-rss",
                "cnt": 242016
              },
              {
                "name": "task-clock",
                "cnt": 2738.772017
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          11911703094
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 366.46523
              },
              {
                "name": "faults",
                "cnt": 25918
              },
              {
                "name": "instructions:u",
                "cnt": 1709590234
              },
              {
                "name": "cpu-clock",
                "cnt": 366.425382
              },
              {
                "name": "wall-time",
                "cnt": 0.352374365
              },
              {
                "name": "cycles:u",
                "cnt": 1240804508
              },
              {
                "name": "max-rss",
                "cnt": 196132
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1709590234
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 388.466682
              },
              {
                "name": "task-clock",
                "cnt": 388.516798
              },
              {
                "name": "faults",
                "cnt": 26067
              },
              {
                "name": "wall-time",
                "cnt": 0.384967539
              },
              {
                "name": "max-rss",
                "cnt": 201508
              },
              {
                "name": "instructions:u",
                "cnt": 1843838549
              },
              {
                "name": "cycles:u",
                "cnt": 1325458689
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1843838549
        ]
      ],
      "futures": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 167044
              },
              {
                "name": "cpu-clock",
                "cnt": 1087.660855
              },
              {
                "name": "cycles:u",
                "cnt": 4149489796
              },
              {
                "name": "task-clock",
                "cnt": 1087.615278
              },
              {
                "name": "faults",
                "cnt": 16378
              },
              {
                "name": "wall-time",
                "cnt": 0.917075932
              },
              {
                "name": "instructions:u",
                "cnt": 5522903988
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          5522903988
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.057081189
              },
              {
                "name": "cpu-clock",
                "cnt": 1237.663296
              },
              {
                "name": "instructions:u",
                "cnt": 6573566055
              },
              {
                "name": "cycles:u",
                "cnt": 4739570478
              },
              {
                "name": "max-rss",
                "cnt": 169324
              },
              {
                "name": "task-clock",
                "cnt": 1237.648148
              },
              {
                "name": "faults",
                "cnt": 16862
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          6573566055
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.122420709
              },
              {
                "name": "task-clock",
                "cnt": 1325.337532
              },
              {
                "name": "cpu-clock",
                "cnt": 1325.333708
              },
              {
                "name": "max-rss",
                "cnt": 204424
              },
              {
                "name": "cycles:u",
                "cnt": 5006622199
              },
              {
                "name": "instructions:u",
                "cnt": 6573914038
              },
              {
                "name": "faults",
                "cnt": 25556
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          6573914038
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1220837594
              },
              {
                "name": "max-rss",
                "cnt": 187336
              },
              {
                "name": "task-clock",
                "cnt": 352.280509
              },
              {
                "name": "cpu-clock",
                "cnt": 352.266407
              },
              {
                "name": "instructions:u",
                "cnt": 1712006793
              },
              {
                "name": "wall-time",
                "cnt": 0.342824827
              },
              {
                "name": "faults",
                "cnt": 23810
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1712006793
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1701287451
              },
              {
                "name": "wall-time",
                "cnt": 0.332609089
              },
              {
                "name": "cycles:u",
                "cnt": 1187425792
              },
              {
                "name": "max-rss",
                "cnt": 184608
              },
              {
                "name": "task-clock",
                "cnt": 341.278056
              },
              {
                "name": "cpu-clock",
                "cnt": 341.264169
              },
              {
                "name": "faults",
                "cnt": 23153
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1701287451
        ]
      ],
      "tokio-webpush-simple": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 18520323047
              },
              {
                "name": "task-clock",
                "cnt": 4684.621462
              },
              {
                "name": "max-rss",
                "cnt": 279668
              },
              {
                "name": "cycles:u",
                "cnt": 17069390536
              },
              {
                "name": "faults",
                "cnt": 104064
              },
              {
                "name": "cpu-clock",
                "cnt": 4684.625596
              },
              {
                "name": "wall-time",
                "cnt": 2.64933184
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          18520323047
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 17344043900
              },
              {
                "name": "max-rss",
                "cnt": 279480
              },
              {
                "name": "instructions:u",
                "cnt": 19315175421
              },
              {
                "name": "task-clock",
                "cnt": 4756.347691
              },
              {
                "name": "faults",
                "cnt": 103914
              },
              {
                "name": "wall-time",
                "cnt": 2.73763686
              },
              {
                "name": "cpu-clock",
                "cnt": 4756.322463
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          19315175421
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 130466
              },
              {
                "name": "wall-time",
                "cnt": 3.108467586
              },
              {
                "name": "cycles:u",
                "cnt": 20850486702
              },
              {
                "name": "instructions:u",
                "cnt": 22372761834
              },
              {
                "name": "task-clock",
                "cnt": 5750.720167
              },
              {
                "name": "cpu-clock",
                "cnt": 5750.770938
              },
              {
                "name": "max-rss",
                "cnt": 332992
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          22372761834
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1502.266864
              },
              {
                "name": "faults",
                "cnt": 93674
              },
              {
                "name": "cycles:u",
                "cnt": 4857113093
              },
              {
                "name": "max-rss",
                "cnt": 308004
              },
              {
                "name": "cpu-clock",
                "cnt": 1502.206006
              },
              {
                "name": "wall-time",
                "cnt": 1.470891649
              },
              {
                "name": "instructions:u",
                "cnt": 5858256331
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          5858256331
        ],
        [
          "patched incremental: minor change",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 340052
              },
              {
                "name": "wall-time",
                "cnt": 2.769667228
              },
              {
                "name": "task-clock",
                "cnt": 5450.034958
              },
              {
                "name": "instructions:u",
                "cnt": 20591589993
              },
              {
                "name": "cycles:u",
                "cnt": 19648688320
              },
              {
                "name": "faults",
                "cnt": 132580
              },
              {
                "name": "cpu-clock",
                "cnt": 5450.055022
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          20591589993
        ]
      ],
      "deep-vector-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1615.877808
              },
              {
                "name": "task-clock",
                "cnt": 1615.87825
              },
              {
                "name": "instructions:u",
                "cnt": 9805940862
              },
              {
                "name": "max-rss",
                "cnt": 244572
              },
              {
                "name": "cycles:u",
                "cnt": 5999549713
              },
              {
                "name": "faults",
                "cnt": 108256
              },
              {
                "name": "wall-time",
                "cnt": 1.622055113
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          9805940862
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 10100112694
              },
              {
                "name": "cycles:u",
                "cnt": 6065605402
              },
              {
                "name": "max-rss",
                "cnt": 257796
              },
              {
                "name": "faults",
                "cnt": 116392
              },
              {
                "name": "wall-time",
                "cnt": 1.644727728
              },
              {
                "name": "cpu-clock",
                "cnt": 1638.578662
              },
              {
                "name": "task-clock",
                "cnt": 1638.579234
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          10100112694
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1715.420407
              },
              {
                "name": "cpu-clock",
                "cnt": 1715.420848
              },
              {
                "name": "instructions:u",
                "cnt": 11028380633
              },
              {
                "name": "faults",
                "cnt": 118460
              },
              {
                "name": "max-rss",
                "cnt": 249076
              },
              {
                "name": "wall-time",
                "cnt": 1.721303405
              },
              {
                "name": "cycles:u",
                "cnt": 6367396725
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          11028380633
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 669.083015
              },
              {
                "name": "faults",
                "cnt": 73151
              },
              {
                "name": "cycles:u",
                "cnt": 2348644733
              },
              {
                "name": "max-rss",
                "cnt": 230144
              },
              {
                "name": "instructions:u",
                "cnt": 4094016086
              },
              {
                "name": "wall-time",
                "cnt": 0.674604062
              },
              {
                "name": "cpu-clock",
                "cnt": 669.093578
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          4094016086
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 6450661852
              },
              {
                "name": "max-rss",
                "cnt": 253764
              },
              {
                "name": "task-clock",
                "cnt": 1749.69959
              },
              {
                "name": "wall-time",
                "cnt": 1.755072612
              },
              {
                "name": "faults",
                "cnt": 116682
              },
              {
                "name": "instructions:u",
                "cnt": 11219420073
              },
              {
                "name": "cpu-clock",
                "cnt": 1749.699501
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          11219420073
        ],
        [
          "patched incremental: add vec item-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1742.665473
              },
              {
                "name": "cycles:u",
                "cnt": 6405668481
              },
              {
                "name": "wall-time",
                "cnt": 1.748130345
              },
              {
                "name": "max-rss",
                "cnt": 253932
              },
              {
                "name": "cpu-clock",
                "cnt": 1742.664981
              },
              {
                "name": "instructions:u",
                "cnt": 11205437518
              },
              {
                "name": "faults",
                "cnt": 116587
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          11205437518
        ]
      ],
      "inflate-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 68618
              },
              {
                "name": "cpu-clock",
                "cnt": 2098.494034
              },
              {
                "name": "cycles:u",
                "cnt": 8073368386
              },
              {
                "name": "wall-time",
                "cnt": 2.103822628
              },
              {
                "name": "max-rss",
                "cnt": 286464
              },
              {
                "name": "instructions:u",
                "cnt": 15681883855
              },
              {
                "name": "task-clock",
                "cnt": 2098.494833
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          15681883855
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 213020
              },
              {
                "name": "cpu-clock",
                "cnt": 17774.590541
              },
              {
                "name": "instructions:u",
                "cnt": 166880283071
              },
              {
                "name": "task-clock",
                "cnt": 17774.597562
              },
              {
                "name": "max-rss",
                "cnt": 547404
              },
              {
                "name": "wall-time",
                "cnt": 17.780861303
              },
              {
                "name": "cycles:u",
                "cnt": 70153432828
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          166880283071
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2239.118122
              },
              {
                "name": "cpu-clock",
                "cnt": 2239.118214
              },
              {
                "name": "instructions:u",
                "cnt": 16600955633
              },
              {
                "name": "faults",
                "cnt": 74454
              },
              {
                "name": "max-rss",
                "cnt": 301900
              },
              {
                "name": "wall-time",
                "cnt": 2.244846456
              },
              {
                "name": "cycles:u",
                "cnt": 8606038319
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          16600955633
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 53301
              },
              {
                "name": "task-clock",
                "cnt": 326.042176
              },
              {
                "name": "instructions:u",
                "cnt": 1596410782
              },
              {
                "name": "cpu-clock",
                "cnt": 326.043294
              },
              {
                "name": "cycles:u",
                "cnt": 1057863447
              },
              {
                "name": "wall-time",
                "cnt": 0.327733892
              },
              {
                "name": "max-rss",
                "cnt": 267628
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1596410782
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2211.855619
              },
              {
                "name": "cpu-clock",
                "cnt": 2211.85681
              },
              {
                "name": "wall-time",
                "cnt": 2.213244907
              },
              {
                "name": "cycles:u",
                "cnt": 8497870085
              },
              {
                "name": "max-rss",
                "cnt": 306636
              },
              {
                "name": "faults",
                "cnt": 74805
              },
              {
                "name": "instructions:u",
                "cnt": 16444521008
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          16444521008
        ]
      ],
      "serde-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 27662307551
              },
              {
                "name": "max-rss",
                "cnt": 294260
              },
              {
                "name": "task-clock",
                "cnt": 7094.107409
              },
              {
                "name": "instructions:u",
                "cnt": 41032335386
              },
              {
                "name": "wall-time",
                "cnt": 6.496599326
              },
              {
                "name": "faults",
                "cnt": 57735
              },
              {
                "name": "cpu-clock",
                "cnt": 7094.097696
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          41032335386
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12527.969399
              },
              {
                "name": "task-clock",
                "cnt": 12527.948726
              },
              {
                "name": "instructions:u",
                "cnt": 90077502528
              },
              {
                "name": "max-rss",
                "cnt": 305356
              },
              {
                "name": "wall-time",
                "cnt": 11.928756342
              },
              {
                "name": "cycles:u",
                "cnt": 49296808503
              },
              {
                "name": "faults",
                "cnt": 60227
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          90077502528
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 399072
              },
              {
                "name": "task-clock",
                "cnt": 7928.230804
              },
              {
                "name": "cycles:u",
                "cnt": 30958770072
              },
              {
                "name": "instructions:u",
                "cnt": 45828648616
              },
              {
                "name": "cpu-clock",
                "cnt": 7928.228317
              },
              {
                "name": "faults",
                "cnt": 83354
              },
              {
                "name": "wall-time",
                "cnt": 7.510316406
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          45828648616
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 382344
              },
              {
                "name": "cycles:u",
                "cnt": 6340424042
              },
              {
                "name": "faults",
                "cnt": 81887
              },
              {
                "name": "wall-time",
                "cnt": 1.674892965
              },
              {
                "name": "cpu-clock",
                "cnt": 1709.376082
              },
              {
                "name": "instructions:u",
                "cnt": 8150640191
              },
              {
                "name": "task-clock",
                "cnt": 1709.376152
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          8150640191
        ]
      ],
      "tokio-webpush-simple-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 401.29912
              },
              {
                "name": "cpu-clock",
                "cnt": 401.29888
              },
              {
                "name": "faults",
                "cnt": 17954
              },
              {
                "name": "instructions:u",
                "cnt": 2083526914
              },
              {
                "name": "cycles:u",
                "cnt": 1459277302
              },
              {
                "name": "wall-time",
                "cnt": 0.431193908
              },
              {
                "name": "max-rss",
                "cnt": 170340
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          2083526914
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 500.725299
              },
              {
                "name": "cpu-clock",
                "cnt": 500.725668
              },
              {
                "name": "cycles:u",
                "cnt": 1848982827
              },
              {
                "name": "instructions:u",
                "cnt": 2861859000
              },
              {
                "name": "wall-time",
                "cnt": 0.506613893
              },
              {
                "name": "max-rss",
                "cnt": 171968
              },
              {
                "name": "faults",
                "cnt": 18412
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          2861859000
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.516998503
              },
              {
                "name": "task-clock",
                "cnt": 511.080079
              },
              {
                "name": "max-rss",
                "cnt": 197204
              },
              {
                "name": "instructions:u",
                "cnt": 2600576465
              },
              {
                "name": "cycles:u",
                "cnt": 1860937601
              },
              {
                "name": "cpu-clock",
                "cnt": 511.089587
              },
              {
                "name": "faults",
                "cnt": 24502
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          2600576465
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 23695
              },
              {
                "name": "wall-time",
                "cnt": 0.238634742
              },
              {
                "name": "max-rss",
                "cnt": 188700
              },
              {
                "name": "cycles:u",
                "cnt": 780631183
              },
              {
                "name": "instructions:u",
                "cnt": 1127192817
              },
              {
                "name": "task-clock",
                "cnt": 238.390788
              },
              {
                "name": "cpu-clock",
                "cnt": 238.390183
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1127192817
        ],
        [
          "patched incremental: minor change-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 345.051729
              },
              {
                "name": "instructions:u",
                "cnt": 1605845279
              },
              {
                "name": "cpu-clock",
                "cnt": 345.051595
              },
              {
                "name": "wall-time",
                "cnt": 0.344642781
              },
              {
                "name": "faults",
                "cnt": 24993
              },
              {
                "name": "max-rss",
                "cnt": 196424
              },
              {
                "name": "cycles:u",
                "cnt": 1189625938
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          1605845279
        ]
      ],
      "crates.io": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 118268218214
              },
              {
                "name": "instructions:u",
                "cnt": 129983623750
              },
              {
                "name": "wall-time",
                "cnt": 14.948199621
              },
              {
                "name": "task-clock",
                "cnt": 31419.445454
              },
              {
                "name": "max-rss",
                "cnt": 778000
              },
              {
                "name": "faults",
                "cnt": 369377
              },
              {
                "name": "cpu-clock",
                "cnt": 31419.462099
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          129983623750
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 903464
              },
              {
                "name": "task-clock",
                "cnt": 35453.886735
              },
              {
                "name": "wall-time",
                "cnt": 17.084184433
              },
              {
                "name": "cycles:u",
                "cnt": 133606303150
              },
              {
                "name": "instructions:u",
                "cnt": 145244373408
              },
              {
                "name": "cpu-clock",
                "cnt": 35453.987225
              },
              {
                "name": "faults",
                "cnt": 396991
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          145244373408
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 20711884066
              },
              {
                "name": "cpu-clock",
                "cnt": 4455.084821
              },
              {
                "name": "max-rss",
                "cnt": 850804
              },
              {
                "name": "task-clock",
                "cnt": 4455.213045
              },
              {
                "name": "faults",
                "cnt": 184309
              },
              {
                "name": "wall-time",
                "cnt": 4.333860224
              },
              {
                "name": "cycles:u",
                "cnt": 16368495933
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          20711884066
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.97311792
              },
              {
                "name": "max-rss",
                "cnt": 878312
              },
              {
                "name": "faults",
                "cnt": 198782
              },
              {
                "name": "cpu-clock",
                "cnt": 5628.595313
              },
              {
                "name": "instructions:u",
                "cnt": 25920273022
              },
              {
                "name": "task-clock",
                "cnt": 5628.735283
              },
              {
                "name": "cycles:u",
                "cnt": 20918860967
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          25920273022
        ]
      ],
      "coercions": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.499282689
              },
              {
                "name": "instructions:u",
                "cnt": 10406037829
              },
              {
                "name": "faults",
                "cnt": 65139
              },
              {
                "name": "cpu-clock",
                "cnt": 1509.400234
              },
              {
                "name": "cycles:u",
                "cnt": 5574890210
              },
              {
                "name": "max-rss",
                "cnt": 211320
              },
              {
                "name": "task-clock",
                "cnt": 1509.404527
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          10406037829
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1700.898117
              },
              {
                "name": "max-rss",
                "cnt": 211880
              },
              {
                "name": "cycles:u",
                "cnt": 6326710000
              },
              {
                "name": "cpu-clock",
                "cnt": 1700.894605
              },
              {
                "name": "instructions:u",
                "cnt": 12134198036
              },
              {
                "name": "wall-time",
                "cnt": 1.659924905
              },
              {
                "name": "faults",
                "cnt": 69217
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          12134198036
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 157036
              },
              {
                "name": "instructions:u",
                "cnt": 3088140828
              },
              {
                "name": "wall-time",
                "cnt": 0.502823265
              },
              {
                "name": "faults",
                "cnt": 37273
              },
              {
                "name": "task-clock",
                "cnt": 500.421677
              },
              {
                "name": "cpu-clock",
                "cnt": 500.410889
              },
              {
                "name": "cycles:u",
                "cnt": 1684558681
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3088140828
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 214260
              },
              {
                "name": "task-clock",
                "cnt": 811.046799
              },
              {
                "name": "cycles:u",
                "cnt": 2780505546
              },
              {
                "name": "instructions:u",
                "cnt": 4846542178
              },
              {
                "name": "faults",
                "cnt": 62796
              },
              {
                "name": "wall-time",
                "cnt": 0.744361843
              },
              {
                "name": "cpu-clock",
                "cnt": 811.042011
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4846542178
        ],
        [
          "patched incremental: add static arr item",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 12089210937
              },
              {
                "name": "task-clock",
                "cnt": 1693.065605
              },
              {
                "name": "cpu-clock",
                "cnt": 1693.052006
              },
              {
                "name": "faults",
                "cnt": 70269
              },
              {
                "name": "max-rss",
                "cnt": 202388
              },
              {
                "name": "cycles:u",
                "cnt": 6272617235
              },
              {
                "name": "wall-time",
                "cnt": 1.649477523
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          12089210937
        ]
      ],
      "style-servo": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 1063733
              },
              {
                "name": "wall-time",
                "cnt": 49.175838309
              },
              {
                "name": "instructions:u",
                "cnt": 346486790088
              },
              {
                "name": "cycles:u",
                "cnt": 307710017737
              },
              {
                "name": "max-rss",
                "cnt": 2033488
              },
              {
                "name": "cpu-clock",
                "cnt": 81018.508587
              },
              {
                "name": "task-clock",
                "cnt": 81018.463144
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          346486790088
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 2603060
              },
              {
                "name": "faults",
                "cnt": 2918257
              },
              {
                "name": "cpu-clock",
                "cnt": 127421.644893
              },
              {
                "name": "instructions:u",
                "cnt": 587344371994
              },
              {
                "name": "wall-time",
                "cnt": 74.629669746
              },
              {
                "name": "task-clock",
                "cnt": 127421.600916
              },
              {
                "name": "cycles:u",
                "cnt": 477161962289
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          587344371994
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 121864871152
              },
              {
                "name": "max-rss",
                "cnt": 2885672
              },
              {
                "name": "task-clock",
                "cnt": 28395.033462
              },
              {
                "name": "wall-time",
                "cnt": 23.71861326
              },
              {
                "name": "faults",
                "cnt": 906851
              },
              {
                "name": "cycles:u",
                "cnt": 104051760558
              },
              {
                "name": "cpu-clock",
                "cnt": 28394.592162
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          121864871152
        ],
        [
          "patched incremental: debugging println",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 78069.595695
              },
              {
                "name": "cpu-clock",
                "cnt": 78069.342564
              },
              {
                "name": "max-rss",
                "cnt": 3032320
              },
              {
                "name": "instructions:u",
                "cnt": 351734981182
              },
              {
                "name": "faults",
                "cnt": 2037905
              },
              {
                "name": "wall-time",
                "cnt": 45.972671976
              },
              {
                "name": "cycles:u",
                "cnt": 290013425195
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          351734981182
        ],
        [
          "patched incremental: b9b3e592dd cherry picked",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 108103.890241
              },
              {
                "name": "task-clock",
                "cnt": 108103.584412
              },
              {
                "name": "max-rss",
                "cnt": 3299940
              },
              {
                "name": "cycles:u",
                "cnt": 401971835098
              },
              {
                "name": "wall-time",
                "cnt": 59.965743589
              },
              {
                "name": "faults",
                "cnt": 2789639
              },
              {
                "name": "instructions:u",
                "cnt": 481463459240
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          481463459240
        ]
      ],
      "piston-image": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 35675198861
              },
              {
                "name": "instructions:u",
                "cnt": 37609369527
              },
              {
                "name": "faults",
                "cnt": 117424
              },
              {
                "name": "max-rss",
                "cnt": 334520
              },
              {
                "name": "wall-time",
                "cnt": 4.401818205
              },
              {
                "name": "task-clock",
                "cnt": 9499.802557
              },
              {
                "name": "cpu-clock",
                "cnt": 9499.822335
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          37609369527
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 38158263468
              },
              {
                "name": "cpu-clock",
                "cnt": 10112.304533
              },
              {
                "name": "task-clock",
                "cnt": 10112.278714
              },
              {
                "name": "wall-time",
                "cnt": 5.026219709
              },
              {
                "name": "instructions:u",
                "cnt": 43313836159
              },
              {
                "name": "max-rss",
                "cnt": 338924
              },
              {
                "name": "faults",
                "cnt": 118529
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          43313836159
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 11138.276877
              },
              {
                "name": "wall-time",
                "cnt": 5.176434453
              },
              {
                "name": "task-clock",
                "cnt": 11138.286999
              },
              {
                "name": "cycles:u",
                "cnt": 41813119874
              },
              {
                "name": "max-rss",
                "cnt": 394960
              },
              {
                "name": "instructions:u",
                "cnt": 42936372577
              },
              {
                "name": "faults",
                "cnt": 130372
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          42936372577
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1226.162247
              },
              {
                "name": "wall-time",
                "cnt": 1.173326456
              },
              {
                "name": "faults",
                "cnt": 66054
              },
              {
                "name": "cycles:u",
                "cnt": 4381925670
              },
              {
                "name": "instructions:u",
                "cnt": 5348916757
              },
              {
                "name": "cpu-clock",
                "cnt": 1226.086984
              },
              {
                "name": "max-rss",
                "cnt": 359588
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          5348916757
        ]
      ],
      "tuple-stress-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 397668
              },
              {
                "name": "cpu-clock",
                "cnt": 4639.378791
              },
              {
                "name": "cycles:u",
                "cnt": 17898982764
              },
              {
                "name": "instructions:u",
                "cnt": 28198221917
              },
              {
                "name": "task-clock",
                "cnt": 4639.364482
              },
              {
                "name": "wall-time",
                "cnt": 4.616618856
              },
              {
                "name": "faults",
                "cnt": 122643
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          28198221917
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 20636195607
              },
              {
                "name": "instructions:u",
                "cnt": 34808571149
              },
              {
                "name": "task-clock",
                "cnt": 5339.286546
              },
              {
                "name": "max-rss",
                "cnt": 399024
              },
              {
                "name": "cpu-clock",
                "cnt": 5339.292951
              },
              {
                "name": "faults",
                "cnt": 126842
              },
              {
                "name": "wall-time",
                "cnt": 5.30997587
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          34808571149
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 9549902000
              },
              {
                "name": "max-rss",
                "cnt": 333608
              },
              {
                "name": "cycles:u",
                "cnt": 6000353124
              },
              {
                "name": "cpu-clock",
                "cnt": 1641.083584
              },
              {
                "name": "faults",
                "cnt": 97413
              },
              {
                "name": "wall-time",
                "cnt": 1.641470684
              },
              {
                "name": "task-clock",
                "cnt": 1641.101095
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          9549902000
        ],
        [
          "patched incremental: new row-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5411.142388
              },
              {
                "name": "cycles:u",
                "cnt": 20609033417
              },
              {
                "name": "faults",
                "cnt": 143150
              },
              {
                "name": "instructions:u",
                "cnt": 34757890302
              },
              {
                "name": "max-rss",
                "cnt": 418144
              },
              {
                "name": "wall-time",
                "cnt": 5.378710369
              },
              {
                "name": "task-clock",
                "cnt": 5411.142147
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          34757890302
        ]
      ],
      "parser-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 100.135638
              },
              {
                "name": "cycles:u",
                "cnt": 337423335
              },
              {
                "name": "instructions:u",
                "cnt": 477431743
              },
              {
                "name": "faults",
                "cnt": 7184
              },
              {
                "name": "cpu-clock",
                "cnt": 100.134404
              },
              {
                "name": "max-rss",
                "cnt": 115428
              },
              {
                "name": "wall-time",
                "cnt": 0.106743115
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          477431743
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 136.603699
              },
              {
                "name": "max-rss",
                "cnt": 117844
              },
              {
                "name": "instructions:u",
                "cnt": 772641353
              },
              {
                "name": "wall-time",
                "cnt": 0.144564438
              },
              {
                "name": "faults",
                "cnt": 7563
              },
              {
                "name": "task-clock",
                "cnt": 136.604535
              },
              {
                "name": "cycles:u",
                "cnt": 469577796
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          772641353
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 122.024225
              },
              {
                "name": "wall-time",
                "cnt": 0.127838488
              },
              {
                "name": "cycles:u",
                "cnt": 414178547
              },
              {
                "name": "faults",
                "cnt": 9254
              },
              {
                "name": "instructions:u",
                "cnt": 577172380
              },
              {
                "name": "max-rss",
                "cnt": 125868
              },
              {
                "name": "task-clock",
                "cnt": 122.025173
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          577172380
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 356928534
              },
              {
                "name": "cpu-clock",
                "cnt": 78.369391
              },
              {
                "name": "faults",
                "cnt": 8839
              },
              {
                "name": "cycles:u",
                "cnt": 243041521
              },
              {
                "name": "max-rss",
                "cnt": 118292
              },
              {
                "name": "wall-time",
                "cnt": 0.082968637
              },
              {
                "name": "task-clock",
                "cnt": 78.369418
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          356928534
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 8731
              },
              {
                "name": "wall-time",
                "cnt": 0.082220525
              },
              {
                "name": "instructions:u",
                "cnt": 353727664
              },
              {
                "name": "cycles:u",
                "cnt": 239233875
              },
              {
                "name": "cpu-clock",
                "cnt": 77.821595
              },
              {
                "name": "max-rss",
                "cnt": 117852
              },
              {
                "name": "task-clock",
                "cnt": 77.822818
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          353727664
        ]
      ],
      "encoding-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 6557.629024
              },
              {
                "name": "instructions:u",
                "cnt": 22565011158
              },
              {
                "name": "cycles:u",
                "cnt": 24688779717
              },
              {
                "name": "max-rss",
                "cnt": 215252
              },
              {
                "name": "faults",
                "cnt": 39503
              },
              {
                "name": "task-clock",
                "cnt": 6557.622652
              },
              {
                "name": "wall-time",
                "cnt": 1.843096128
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          22565011158
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 6879.496204
              },
              {
                "name": "faults",
                "cnt": 41486
              },
              {
                "name": "wall-time",
                "cnt": 2.124998949
              },
              {
                "name": "task-clock",
                "cnt": 6879.496385
              },
              {
                "name": "max-rss",
                "cnt": 216288
              },
              {
                "name": "instructions:u",
                "cnt": 25169575420
              },
              {
                "name": "cycles:u",
                "cnt": 25935144071
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          25169575420
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 19437854837
              },
              {
                "name": "task-clock",
                "cnt": 5692.764446
              },
              {
                "name": "max-rss",
                "cnt": 249244
              },
              {
                "name": "cycles:u",
                "cnt": 21343571940
              },
              {
                "name": "cpu-clock",
                "cnt": 5692.769181
              },
              {
                "name": "wall-time",
                "cnt": 1.754364067
              },
              {
                "name": "faults",
                "cnt": 45675
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          19437854837
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 195904
              },
              {
                "name": "cpu-clock",
                "cnt": 353.995307
              },
              {
                "name": "faults",
                "cnt": 25688
              },
              {
                "name": "cycles:u",
                "cnt": 1217458687
              },
              {
                "name": "task-clock",
                "cnt": 354.032955
              },
              {
                "name": "instructions:u",
                "cnt": 1676583600
              },
              {
                "name": "wall-time",
                "cnt": 0.344180405
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1676583600
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 26265
              },
              {
                "name": "cycles:u",
                "cnt": 1568965411
              },
              {
                "name": "max-rss",
                "cnt": 199652
              },
              {
                "name": "cpu-clock",
                "cnt": 444.944419
              },
              {
                "name": "task-clock",
                "cnt": 444.96799
              },
              {
                "name": "wall-time",
                "cnt": 0.422618822
              },
              {
                "name": "instructions:u",
                "cnt": 2083407991
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2083407991
        ]
      ],
      "unify-linearly": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1075493689
              },
              {
                "name": "faults",
                "cnt": 17471
              },
              {
                "name": "cycles:u",
                "cnt": 706085955
              },
              {
                "name": "task-clock",
                "cnt": 227.121651
              },
              {
                "name": "max-rss",
                "cnt": 129592
              },
              {
                "name": "wall-time",
                "cnt": 0.213202894
              },
              {
                "name": "cpu-clock",
                "cnt": 227.118081
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1075493689
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1088193134
              },
              {
                "name": "task-clock",
                "cnt": 230.125285
              },
              {
                "name": "faults",
                "cnt": 17489
              },
              {
                "name": "cycles:u",
                "cnt": 717778994
              },
              {
                "name": "wall-time",
                "cnt": 0.217044623
              },
              {
                "name": "cpu-clock",
                "cnt": 230.109512
              },
              {
                "name": "max-rss",
                "cnt": 129724
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1088193134
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 136996
              },
              {
                "name": "cycles:u",
                "cnt": 779177029
              },
              {
                "name": "task-clock",
                "cnt": 247.404187
              },
              {
                "name": "instructions:u",
                "cnt": 1159751929
              },
              {
                "name": "faults",
                "cnt": 19288
              },
              {
                "name": "wall-time",
                "cnt": 0.23018308
              },
              {
                "name": "cpu-clock",
                "cnt": 247.398568
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1159751929
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 540663403
              },
              {
                "name": "task-clock",
                "cnt": 182.748904
              },
              {
                "name": "instructions:u",
                "cnt": 872190595
              },
              {
                "name": "wall-time",
                "cnt": 0.1842238
              },
              {
                "name": "max-rss",
                "cnt": 115348
              },
              {
                "name": "faults",
                "cnt": 17378
              },
              {
                "name": "cpu-clock",
                "cnt": 182.737918
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          872190595
        ],
        [
          "patched incremental: dummy fn",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1009614381
              },
              {
                "name": "cpu-clock",
                "cnt": 221.980343
              },
              {
                "name": "cycles:u",
                "cnt": 677563717
              },
              {
                "name": "task-clock",
                "cnt": 221.986054
              },
              {
                "name": "faults",
                "cnt": 19069
              },
              {
                "name": "wall-time",
                "cnt": 0.204421143
              },
              {
                "name": "max-rss",
                "cnt": 135912
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          1009614381
        ]
      ],
      "serde": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 39869067518
              },
              {
                "name": "task-clock",
                "cnt": 6599.314069
              },
              {
                "name": "faults",
                "cnt": 56149
              },
              {
                "name": "wall-time",
                "cnt": 6.459950607
              },
              {
                "name": "cpu-clock",
                "cnt": 6599.331151
              },
              {
                "name": "cycles:u",
                "cnt": 25882001275
              },
              {
                "name": "max-rss",
                "cnt": 299032
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          39869067518
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 47554385593
              },
              {
                "name": "wall-time",
                "cnt": 11.879910381
              },
              {
                "name": "instructions:u",
                "cnt": 88917375761
              },
              {
                "name": "faults",
                "cnt": 57850
              },
              {
                "name": "max-rss",
                "cnt": 306320
              },
              {
                "name": "cpu-clock",
                "cnt": 12029.371753
              },
              {
                "name": "task-clock",
                "cnt": 12029.346549
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          88917375761
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 45400091697
              },
              {
                "name": "cycles:u",
                "cnt": 30048027090
              },
              {
                "name": "cpu-clock",
                "cnt": 7685.026328
              },
              {
                "name": "faults",
                "cnt": 82618
              },
              {
                "name": "wall-time",
                "cnt": 7.517463524
              },
              {
                "name": "task-clock",
                "cnt": 7685.015196
              },
              {
                "name": "max-rss",
                "cnt": 393544
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          45400091697
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 6327645197
              },
              {
                "name": "cpu-clock",
                "cnt": 1704.702083
              },
              {
                "name": "task-clock",
                "cnt": 1704.717535
              },
              {
                "name": "max-rss",
                "cnt": 382244
              },
              {
                "name": "faults",
                "cnt": 81695
              },
              {
                "name": "instructions:u",
                "cnt": 8165485419
              },
              {
                "name": "wall-time",
                "cnt": 1.666928983
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          8165485419
        ]
      ],
      "deep-vector": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2380.196429
              },
              {
                "name": "task-clock",
                "cnt": 2380.20364
              },
              {
                "name": "wall-time",
                "cnt": 2.343438878
              },
              {
                "name": "max-rss",
                "cnt": 260320
              },
              {
                "name": "instructions:u",
                "cnt": 14008497962
              },
              {
                "name": "cycles:u",
                "cnt": 8711387797
              },
              {
                "name": "faults",
                "cnt": 164816
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          14008497962
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 172659
              },
              {
                "name": "wall-time",
                "cnt": 2.393565819
              },
              {
                "name": "cpu-clock",
                "cnt": 2437.063974
              },
              {
                "name": "max-rss",
                "cnt": 262108
              },
              {
                "name": "instructions:u",
                "cnt": 14295857015
              },
              {
                "name": "cycles:u",
                "cnt": 8875325159
              },
              {
                "name": "task-clock",
                "cnt": 2437.059427
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          14295857015
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2556.876898
              },
              {
                "name": "cycles:u",
                "cnt": 9332998177
              },
              {
                "name": "wall-time",
                "cnt": 2.491767982
              },
              {
                "name": "faults",
                "cnt": 175969
              },
              {
                "name": "max-rss",
                "cnt": 264984
              },
              {
                "name": "task-clock",
                "cnt": 2556.896069
              },
              {
                "name": "instructions:u",
                "cnt": 15788513481
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          15788513481
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.858692706
              },
              {
                "name": "max-rss",
                "cnt": 230784
              },
              {
                "name": "instructions:u",
                "cnt": 5133391823
              },
              {
                "name": "task-clock",
                "cnt": 857.997822
              },
              {
                "name": "cpu-clock",
                "cnt": 857.982829
              },
              {
                "name": "cycles:u",
                "cnt": 2949249149
              },
              {
                "name": "faults",
                "cnt": 89418
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          5133391823
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 268452
              },
              {
                "name": "instructions:u",
                "cnt": 16012136273
              },
              {
                "name": "faults",
                "cnt": 173335
              },
              {
                "name": "cpu-clock",
                "cnt": 2577.472681
              },
              {
                "name": "cycles:u",
                "cnt": 9420987091
              },
              {
                "name": "wall-time",
                "cnt": 2.522519244
              },
              {
                "name": "task-clock",
                "cnt": 2577.459011
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          16012136273
        ],
        [
          "patched incremental: add vec item",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 2.498925264
              },
              {
                "name": "faults",
                "cnt": 173688
              },
              {
                "name": "max-rss",
                "cnt": 268940
              },
              {
                "name": "instructions:u",
                "cnt": 15946223820
              },
              {
                "name": "cycles:u",
                "cnt": 9416244709
              },
              {
                "name": "task-clock",
                "cnt": 2568.431203
              },
              {
                "name": "cpu-clock",
                "cnt": 2568.439669
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          15946223820
        ]
      ],
      "regression-31157-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 30633492238
              },
              {
                "name": "cpu-clock",
                "cnt": 8051.914812
              },
              {
                "name": "instructions:u",
                "cnt": 27226558193
              },
              {
                "name": "faults",
                "cnt": 37013
              },
              {
                "name": "task-clock",
                "cnt": 8051.920438
              },
              {
                "name": "max-rss",
                "cnt": 185952
              },
              {
                "name": "wall-time",
                "cnt": 2.941210549
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          27226558193
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 8132.192196
              },
              {
                "name": "cycles:u",
                "cnt": 30958604717
              },
              {
                "name": "cpu-clock",
                "cnt": 8132.201987
              },
              {
                "name": "max-rss",
                "cnt": 186428
              },
              {
                "name": "instructions:u",
                "cnt": 27986347444
              },
              {
                "name": "faults",
                "cnt": 37194
              },
              {
                "name": "wall-time",
                "cnt": 3.018257776
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          27986347444
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 36697
              },
              {
                "name": "cycles:u",
                "cnt": 20725449504
              },
              {
                "name": "wall-time",
                "cnt": 1.944551247
              },
              {
                "name": "task-clock",
                "cnt": 5483.048786
              },
              {
                "name": "instructions:u",
                "cnt": 17360857946
              },
              {
                "name": "cpu-clock",
                "cnt": 5483.049937
              },
              {
                "name": "max-rss",
                "cnt": 215604
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          17360857946
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 277.586211
              },
              {
                "name": "wall-time",
                "cnt": 0.27018442
              },
              {
                "name": "cpu-clock",
                "cnt": 277.575403
              },
              {
                "name": "instructions:u",
                "cnt": 1197779682
              },
              {
                "name": "max-rss",
                "cnt": 181216
              },
              {
                "name": "faults",
                "cnt": 21484
              },
              {
                "name": "cycles:u",
                "cnt": 944607559
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          1197779682
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 525.766635
              },
              {
                "name": "faults",
                "cnt": 23450
              },
              {
                "name": "instructions:u",
                "cnt": 2401811884
              },
              {
                "name": "max-rss",
                "cnt": 191224
              },
              {
                "name": "wall-time",
                "cnt": 0.398341581
              },
              {
                "name": "task-clock",
                "cnt": 525.779995
              },
              {
                "name": "cycles:u",
                "cnt": 1899876957
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2401811884
        ]
      ],
      "syn": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 51737
              },
              {
                "name": "cpu-clock",
                "cnt": 3330.023552
              },
              {
                "name": "max-rss",
                "cnt": 245220
              },
              {
                "name": "instructions:u",
                "cnt": 13745758748
              },
              {
                "name": "wall-time",
                "cnt": 1.677746533
              },
              {
                "name": "task-clock",
                "cnt": 3330.020026
              },
              {
                "name": "cycles:u",
                "cnt": 12474281672
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          13745758748
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 2.180537178
              },
              {
                "name": "faults",
                "cnt": 53094
              },
              {
                "name": "cycles:u",
                "cnt": 14627658002
              },
              {
                "name": "instructions:u",
                "cnt": 18211455111
              },
              {
                "name": "task-clock",
                "cnt": 3876.535906
              },
              {
                "name": "max-rss",
                "cnt": 248020
              },
              {
                "name": "cpu-clock",
                "cnt": 3876.552166
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          18211455111
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 3942.963072
              },
              {
                "name": "max-rss",
                "cnt": 272484
              },
              {
                "name": "instructions:u",
                "cnt": 16799684727
              },
              {
                "name": "wall-time",
                "cnt": 2.108708251
              },
              {
                "name": "cpu-clock",
                "cnt": 3943.016078
              },
              {
                "name": "cycles:u",
                "cnt": 14757738085
              },
              {
                "name": "faults",
                "cnt": 65570
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          16799684727
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 657.900651
              },
              {
                "name": "faults",
                "cnt": 41787
              },
              {
                "name": "task-clock",
                "cnt": 657.915986
              },
              {
                "name": "cycles:u",
                "cnt": 2320977497
              },
              {
                "name": "instructions:u",
                "cnt": 3031962216
              },
              {
                "name": "wall-time",
                "cnt": 0.636149335
              },
              {
                "name": "max-rss",
                "cnt": 255344
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3031962216
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.71962337
              },
              {
                "name": "instructions:u",
                "cnt": 3724496862
              },
              {
                "name": "max-rss",
                "cnt": 272088
              },
              {
                "name": "faults",
                "cnt": 44775
              },
              {
                "name": "task-clock",
                "cnt": 830.599394
              },
              {
                "name": "cpu-clock",
                "cnt": 830.571806
              },
              {
                "name": "cycles:u",
                "cnt": 2947308024
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3724496862
        ],
        [
          "patched incremental: nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 71760
              },
              {
                "name": "max-rss",
                "cnt": 296220
              },
              {
                "name": "task-clock",
                "cnt": 4434.463068
              },
              {
                "name": "instructions:u",
                "cnt": 20689343066
              },
              {
                "name": "wall-time",
                "cnt": 2.503864984
              },
              {
                "name": "cpu-clock",
                "cnt": 4434.489349
              },
              {
                "name": "cycles:u",
                "cnt": 16684282558
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          20689343066
        ]
      ],
      "clap-rs-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 435623
              },
              {
                "name": "max-rss",
                "cnt": 442644
              },
              {
                "name": "cpu-clock",
                "cnt": 65689.190131
              },
              {
                "name": "instructions:u",
                "cnt": 250579535773
              },
              {
                "name": "cycles:u",
                "cnt": 251095118072
              },
              {
                "name": "task-clock",
                "cnt": 65689.133306
              },
              {
                "name": "wall-time",
                "cnt": 31.495159331
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          250579535773
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 575590
              },
              {
                "name": "max-rss",
                "cnt": 498692
              },
              {
                "name": "task-clock",
                "cnt": 97129.906866
              },
              {
                "name": "cycles:u",
                "cnt": 376167489974
              },
              {
                "name": "instructions:u",
                "cnt": 556600714980
              },
              {
                "name": "wall-time",
                "cnt": 62.91632376
              },
              {
                "name": "cpu-clock",
                "cnt": 97129.982419
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          556600714980
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 53678.623227
              },
              {
                "name": "cpu-clock",
                "cnt": 53678.694504
              },
              {
                "name": "faults",
                "cnt": 422331
              },
              {
                "name": "instructions:u",
                "cnt": 199535223388
              },
              {
                "name": "max-rss",
                "cnt": 622940
              },
              {
                "name": "cycles:u",
                "cnt": 204670435504
              },
              {
                "name": "wall-time",
                "cnt": 24.618001998
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          199535223388
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 280512
              },
              {
                "name": "instructions:u",
                "cnt": 16926887740
              },
              {
                "name": "max-rss",
                "cnt": 993712
              },
              {
                "name": "cycles:u",
                "cnt": 11040357987
              },
              {
                "name": "task-clock",
                "cnt": 3107.693
              },
              {
                "name": "wall-time",
                "cnt": 3.050797544
              },
              {
                "name": "cpu-clock",
                "cnt": 3107.659578
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          16926887740
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 8017.575922
              },
              {
                "name": "max-rss",
                "cnt": 1019344
              },
              {
                "name": "faults",
                "cnt": 294322
              },
              {
                "name": "cycles:u",
                "cnt": 29712693210
              },
              {
                "name": "wall-time",
                "cnt": 4.556981762
              },
              {
                "name": "cpu-clock",
                "cnt": 8017.578545
              },
              {
                "name": "instructions:u",
                "cnt": 35440026004
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          35440026004
        ]
      ],
      "unused-warnings": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 493.872458
              },
              {
                "name": "instructions:u",
                "cnt": 2553540339
              },
              {
                "name": "faults",
                "cnt": 37408
              },
              {
                "name": "max-rss",
                "cnt": 156396
              },
              {
                "name": "cycles:u",
                "cnt": 1690037809
              },
              {
                "name": "wall-time",
                "cnt": 0.488940229
              },
              {
                "name": "task-clock",
                "cnt": 493.876131
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          2553540339
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 490.960415
              },
              {
                "name": "task-clock",
                "cnt": 490.964268
              },
              {
                "name": "faults",
                "cnt": 37759
              },
              {
                "name": "instructions:u",
                "cnt": 2553927368
              },
              {
                "name": "wall-time",
                "cnt": 0.486612841
              },
              {
                "name": "max-rss",
                "cnt": 157824
              },
              {
                "name": "cycles:u",
                "cnt": 1656912031
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          2553927368
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 698.207248
              },
              {
                "name": "faults",
                "cnt": 60316
              },
              {
                "name": "max-rss",
                "cnt": 228308
              },
              {
                "name": "wall-time",
                "cnt": 0.693087116
              },
              {
                "name": "instructions:u",
                "cnt": 3542419306
              },
              {
                "name": "cycles:u",
                "cnt": 2402338597
              },
              {
                "name": "cpu-clock",
                "cnt": 698.214513
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          3542419306
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3281517359
              },
              {
                "name": "task-clock",
                "cnt": 707.637462
              },
              {
                "name": "cpu-clock",
                "cnt": 707.630505
              },
              {
                "name": "max-rss",
                "cnt": 224420
              },
              {
                "name": "cycles:u",
                "cnt": 2429117163
              },
              {
                "name": "wall-time",
                "cnt": 0.678363076
              },
              {
                "name": "faults",
                "cnt": 63494
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3281517359
        ],
        [
          "patched incremental: dummy fn",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 702.50904
              },
              {
                "name": "task-clock",
                "cnt": 702.512799
              },
              {
                "name": "max-rss",
                "cnt": 242912
              },
              {
                "name": "faults",
                "cnt": 63620
              },
              {
                "name": "wall-time",
                "cnt": 0.666451618
              },
              {
                "name": "cycles:u",
                "cnt": 2395193511
              },
              {
                "name": "instructions:u",
                "cnt": 3322111413
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          3322111413
        ]
      ],
      "coercions-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1269.107539
              },
              {
                "name": "cpu-clock",
                "cnt": 1269.10624
              },
              {
                "name": "faults",
                "cnt": 44864
              },
              {
                "name": "max-rss",
                "cnt": 184572
              },
              {
                "name": "cycles:u",
                "cnt": 4759083623
              },
              {
                "name": "instructions:u",
                "cnt": 9230492000
              },
              {
                "name": "wall-time",
                "cnt": 1.255369961
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          9230492000
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 48779
              },
              {
                "name": "instructions:u",
                "cnt": 10949775269
              },
              {
                "name": "cpu-clock",
                "cnt": 1446.63822
              },
              {
                "name": "wall-time",
                "cnt": 1.412557492
              },
              {
                "name": "task-clock",
                "cnt": 1446.642524
              },
              {
                "name": "max-rss",
                "cnt": 202164
              },
              {
                "name": "cycles:u",
                "cnt": 5454221651
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          10949775269
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2902485081
              },
              {
                "name": "wall-time",
                "cnt": 0.45080077
              },
              {
                "name": "faults",
                "cnt": 35407
              },
              {
                "name": "max-rss",
                "cnt": 158040
              },
              {
                "name": "task-clock",
                "cnt": 449.88312
              },
              {
                "name": "cycles:u",
                "cnt": 1539321885
              },
              {
                "name": "cpu-clock",
                "cnt": 449.878896
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          2902485081
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3647325872
              },
              {
                "name": "wall-time",
                "cnt": 0.53934441
              },
              {
                "name": "cpu-clock",
                "cnt": 567.698971
              },
              {
                "name": "task-clock",
                "cnt": 567.70079
              },
              {
                "name": "cycles:u",
                "cnt": 1963819034
              },
              {
                "name": "max-rss",
                "cnt": 187496
              },
              {
                "name": "faults",
                "cnt": 42069
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3647325872
        ],
        [
          "patched incremental: add static arr item-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 191956
              },
              {
                "name": "task-clock",
                "cnt": 1442.985546
              },
              {
                "name": "faults",
                "cnt": 49129
              },
              {
                "name": "instructions:u",
                "cnt": 10906550609
              },
              {
                "name": "wall-time",
                "cnt": 1.411245092
              },
              {
                "name": "cpu-clock",
                "cnt": 1443.004066
              },
              {
                "name": "cycles:u",
                "cnt": 5431984094
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          10906550609
        ]
      ],
      "piston-image-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 164929
              },
              {
                "name": "cycles:u",
                "cnt": 162342447094
              },
              {
                "name": "task-clock",
                "cnt": 43078.122941
              },
              {
                "name": "max-rss",
                "cnt": 344100
              },
              {
                "name": "cpu-clock",
                "cnt": 43078.175194
              },
              {
                "name": "wall-time",
                "cnt": 9.040361317
              },
              {
                "name": "instructions:u",
                "cnt": 134099569769
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          134099569769
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 44086.74045
              },
              {
                "name": "faults",
                "cnt": 166770
              },
              {
                "name": "task-clock",
                "cnt": 44086.690781
              },
              {
                "name": "instructions:u",
                "cnt": 139601538746
              },
              {
                "name": "wall-time",
                "cnt": 9.725323712
              },
              {
                "name": "max-rss",
                "cnt": 351868
              },
              {
                "name": "cycles:u",
                "cnt": 166268263672
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          139601538746
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 87497718821
              },
              {
                "name": "wall-time",
                "cnt": 7.044230643
              },
              {
                "name": "task-clock",
                "cnt": 30292.417481
              },
              {
                "name": "cycles:u",
                "cnt": 114105935652
              },
              {
                "name": "faults",
                "cnt": 129567
              },
              {
                "name": "max-rss",
                "cnt": 394464
              },
              {
                "name": "cpu-clock",
                "cnt": 30292.482217
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          87497718821
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1233.242148
              },
              {
                "name": "max-rss",
                "cnt": 354196
              },
              {
                "name": "wall-time",
                "cnt": 1.190508639
              },
              {
                "name": "cpu-clock",
                "cnt": 1233.207779
              },
              {
                "name": "instructions:u",
                "cnt": 5394975189
              },
              {
                "name": "cycles:u",
                "cnt": 4431331626
              },
              {
                "name": "faults",
                "cnt": 66503
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          5394975189
        ]
      ],
      "unify-linearly-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 220.600443
              },
              {
                "name": "cpu-clock",
                "cnt": 220.598189
              },
              {
                "name": "max-rss",
                "cnt": 128388
              },
              {
                "name": "wall-time",
                "cnt": 0.215350379
              },
              {
                "name": "faults",
                "cnt": 16738
              },
              {
                "name": "cycles:u",
                "cnt": 695859727
              },
              {
                "name": "instructions:u",
                "cnt": 1087337917
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1087337917
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1100212273
              },
              {
                "name": "task-clock",
                "cnt": 221.556097
              },
              {
                "name": "faults",
                "cnt": 16727
              },
              {
                "name": "wall-time",
                "cnt": 0.216208351
              },
              {
                "name": "cpu-clock",
                "cnt": 221.554133
              },
              {
                "name": "cycles:u",
                "cnt": 702727359
              },
              {
                "name": "max-rss",
                "cnt": 128596
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1100212273
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 235.422022
              },
              {
                "name": "cpu-clock",
                "cnt": 235.43077
              },
              {
                "name": "faults",
                "cnt": 18471
              },
              {
                "name": "instructions:u",
                "cnt": 1154296094
              },
              {
                "name": "cycles:u",
                "cnt": 743874578
              },
              {
                "name": "wall-time",
                "cnt": 0.225529871
              },
              {
                "name": "max-rss",
                "cnt": 132696
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1154296094
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 540996088
              },
              {
                "name": "instructions:u",
                "cnt": 867431753
              },
              {
                "name": "max-rss",
                "cnt": 114640
              },
              {
                "name": "wall-time",
                "cnt": 0.1819913
              },
              {
                "name": "faults",
                "cnt": 17334
              },
              {
                "name": "task-clock",
                "cnt": 181.499783
              },
              {
                "name": "cpu-clock",
                "cnt": 181.492274
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          867431753
        ],
        [
          "patched incremental: dummy fn-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.200577937
              },
              {
                "name": "task-clock",
                "cnt": 212.589937
              },
              {
                "name": "faults",
                "cnt": 18446
              },
              {
                "name": "instructions:u",
                "cnt": 1004122317
              },
              {
                "name": "cycles:u",
                "cnt": 650744844
              },
              {
                "name": "max-rss",
                "cnt": 132100
              },
              {
                "name": "cpu-clock",
                "cnt": 212.598425
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          1004122317
        ]
      ],
      "hyper": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 4498.819824
              },
              {
                "name": "faults",
                "cnt": 65552
              },
              {
                "name": "instructions:u",
                "cnt": 18126753021
              },
              {
                "name": "wall-time",
                "cnt": 2.473978171
              },
              {
                "name": "cpu-clock",
                "cnt": 4498.814451
              },
              {
                "name": "cycles:u",
                "cnt": 16927823248
              },
              {
                "name": "max-rss",
                "cnt": 268348
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          18126753021
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4935.17485
              },
              {
                "name": "max-rss",
                "cnt": 269984
              },
              {
                "name": "cycles:u",
                "cnt": 18684035561
              },
              {
                "name": "wall-time",
                "cnt": 2.886589821
              },
              {
                "name": "task-clock",
                "cnt": 4935.163165
              },
              {
                "name": "faults",
                "cnt": 65540
              },
              {
                "name": "instructions:u",
                "cnt": 21693625162
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          21693625162
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5579.623075
              },
              {
                "name": "wall-time",
                "cnt": 3.022136478
              },
              {
                "name": "cycles:u",
                "cnt": 20859638877
              },
              {
                "name": "instructions:u",
                "cnt": 22186007899
              },
              {
                "name": "max-rss",
                "cnt": 332864
              },
              {
                "name": "task-clock",
                "cnt": 5579.640674
              },
              {
                "name": "faults",
                "cnt": 77969
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          22186007899
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 930.900518
              },
              {
                "name": "wall-time",
                "cnt": 0.891940807
              },
              {
                "name": "instructions:u",
                "cnt": 4076755173
              },
              {
                "name": "cycles:u",
                "cnt": 3292977900
              },
              {
                "name": "max-rss",
                "cnt": 298392
              },
              {
                "name": "task-clock",
                "cnt": 930.941775
              },
              {
                "name": "faults",
                "cnt": 51924
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          4076755173
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 51507
              },
              {
                "name": "task-clock",
                "cnt": 945.007706
              },
              {
                "name": "wall-time",
                "cnt": 0.90714647
              },
              {
                "name": "cpu-clock",
                "cnt": 944.915916
              },
              {
                "name": "max-rss",
                "cnt": 302212
              },
              {
                "name": "cycles:u",
                "cnt": 3335632648
              },
              {
                "name": "instructions:u",
                "cnt": 4166009807
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4166009807
        ]
      ],
      "hyper-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 72966
              },
              {
                "name": "max-rss",
                "cnt": 270960
              },
              {
                "name": "wall-time",
                "cnt": 4.087590458
              },
              {
                "name": "cycles:u",
                "cnt": 66656569218
              },
              {
                "name": "task-clock",
                "cnt": 17684.557746
              },
              {
                "name": "instructions:u",
                "cnt": 53163403428
              },
              {
                "name": "cpu-clock",
                "cnt": 17684.578508
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          53163403428
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.512578786
              },
              {
                "name": "faults",
                "cnt": 73809
              },
              {
                "name": "cycles:u",
                "cnt": 67781278453
              },
              {
                "name": "max-rss",
                "cnt": 274860
              },
              {
                "name": "task-clock",
                "cnt": 17973.541621
              },
              {
                "name": "instructions:u",
                "cnt": 56706154667
              },
              {
                "name": "cpu-clock",
                "cnt": 17973.558871
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          56706154667
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 3.852003849
              },
              {
                "name": "instructions:u",
                "cnt": 42991755157
              },
              {
                "name": "faults",
                "cnt": 74438
              },
              {
                "name": "max-rss",
                "cnt": 334168
              },
              {
                "name": "cpu-clock",
                "cnt": 14874.29531
              },
              {
                "name": "cycles:u",
                "cnt": 56004883908
              },
              {
                "name": "task-clock",
                "cnt": 14874.280118
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          42991755157
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.88540994
              },
              {
                "name": "cpu-clock",
                "cnt": 925.198344
              },
              {
                "name": "faults",
                "cnt": 52257
              },
              {
                "name": "cycles:u",
                "cnt": 3310946790
              },
              {
                "name": "instructions:u",
                "cnt": 4083873969
              },
              {
                "name": "max-rss",
                "cnt": 295308
              },
              {
                "name": "task-clock",
                "cnt": 925.242378
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          4083873969
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 3437381396
              },
              {
                "name": "max-rss",
                "cnt": 300084
              },
              {
                "name": "task-clock",
                "cnt": 961.15937
              },
              {
                "name": "cpu-clock",
                "cnt": 961.128868
              },
              {
                "name": "wall-time",
                "cnt": 0.905680661
              },
              {
                "name": "instructions:u",
                "cnt": 4255200944
              },
              {
                "name": "faults",
                "cnt": 51735
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          4255200944
        ]
      ],
      "issue-46449": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10058
              },
              {
                "name": "max-rss",
                "cnt": 141244
              },
              {
                "name": "instructions:u",
                "cnt": 974502948
              },
              {
                "name": "cpu-clock",
                "cnt": 241.587244
              },
              {
                "name": "task-clock",
                "cnt": 241.582624
              },
              {
                "name": "cycles:u",
                "cnt": 844580717
              },
              {
                "name": "wall-time",
                "cnt": 0.14875476
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          974502948
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 982006296
              },
              {
                "name": "cpu-clock",
                "cnt": 245.520893
              },
              {
                "name": "faults",
                "cnt": 10314
              },
              {
                "name": "task-clock",
                "cnt": 245.525606
              },
              {
                "name": "cycles:u",
                "cnt": 857481845
              },
              {
                "name": "wall-time",
                "cnt": 0.152679172
              },
              {
                "name": "max-rss",
                "cnt": 142172
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          982006296
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.175307137
              },
              {
                "name": "task-clock",
                "cnt": 274.738877
              },
              {
                "name": "max-rss",
                "cnt": 150892
              },
              {
                "name": "instructions:u",
                "cnt": 1123551077
              },
              {
                "name": "cpu-clock",
                "cnt": 274.729945
              },
              {
                "name": "cycles:u",
                "cnt": 953738591
              },
              {
                "name": "faults",
                "cnt": 12456
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1123551077
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 312470389
              },
              {
                "name": "max-rss",
                "cnt": 135664
              },
              {
                "name": "faults",
                "cnt": 10115
              },
              {
                "name": "wall-time",
                "cnt": 0.105241295
              },
              {
                "name": "instructions:u",
                "cnt": 446483003
              },
              {
                "name": "task-clock",
                "cnt": 102.378201
              },
              {
                "name": "cpu-clock",
                "cnt": 102.376906
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          446483003
        ],
        [
          "patched incremental: io error 6144",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 267.44475
              },
              {
                "name": "wall-time",
                "cnt": 0.16180348
              },
              {
                "name": "max-rss",
                "cnt": 152064
              },
              {
                "name": "instructions:u",
                "cnt": 1053570821
              },
              {
                "name": "cycles:u",
                "cnt": 919669454
              },
              {
                "name": "cpu-clock",
                "cnt": 267.433998
              },
              {
                "name": "faults",
                "cnt": 12782
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          1053570821
        ],
        [
          "patched incremental: u32 3072",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 252.078146
              },
              {
                "name": "cycles:u",
                "cnt": 859107800
              },
              {
                "name": "max-rss",
                "cnt": 153564
              },
              {
                "name": "cpu-clock",
                "cnt": 252.069988
              },
              {
                "name": "faults",
                "cnt": 13197
              },
              {
                "name": "instructions:u",
                "cnt": 983182737
              },
              {
                "name": "wall-time",
                "cnt": 0.154957109
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          983182737
        ],
        [
          "patched incremental: u8 3072",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 150248
              },
              {
                "name": "faults",
                "cnt": 12496
              },
              {
                "name": "task-clock",
                "cnt": 236.380783
              },
              {
                "name": "cpu-clock",
                "cnt": 236.375522
              },
              {
                "name": "cycles:u",
                "cnt": 805923475
              },
              {
                "name": "instructions:u",
                "cnt": 916082914
              },
              {
                "name": "wall-time",
                "cnt": 0.141575243
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          916082914
        ],
        [
          "patched incremental: empty 3072",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 981559443
              },
              {
                "name": "faults",
                "cnt": 12676
              },
              {
                "name": "task-clock",
                "cnt": 249.122474
              },
              {
                "name": "cycles:u",
                "cnt": 848971644
              },
              {
                "name": "cpu-clock",
                "cnt": 249.12706
              },
              {
                "name": "wall-time",
                "cnt": 0.154267116
              },
              {
                "name": "max-rss",
                "cnt": 151792
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          981559443
        ],
        [
          "patched incremental: static str 6144",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 993454411
              },
              {
                "name": "faults",
                "cnt": 12676
              },
              {
                "name": "wall-time",
                "cnt": 0.155345628
              },
              {
                "name": "cpu-clock",
                "cnt": 247.219801
              },
              {
                "name": "task-clock",
                "cnt": 247.2265
              },
              {
                "name": "max-rss",
                "cnt": 151588
              },
              {
                "name": "cycles:u",
                "cnt": 846956125
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          993454411
        ]
      ],
      "style-servo-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 1933060
              },
              {
                "name": "task-clock",
                "cnt": 302031.130082
              },
              {
                "name": "wall-time",
                "cnt": 77.724730459
              },
              {
                "name": "instructions:u",
                "cnt": 959015665090
              },
              {
                "name": "cycles:u",
                "cnt": 1140283786932
              },
              {
                "name": "faults",
                "cnt": 1369284
              },
              {
                "name": "cpu-clock",
                "cnt": 302031.324368
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          959015665090
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 873127823151
              },
              {
                "name": "faults",
                "cnt": 1341567
              },
              {
                "name": "wall-time",
                "cnt": 74.868765385
              },
              {
                "name": "task-clock",
                "cnt": 285986.994884
              },
              {
                "name": "max-rss",
                "cnt": 2566968
              },
              {
                "name": "cycles:u",
                "cnt": 1079331601882
              },
              {
                "name": "cpu-clock",
                "cnt": 285987.505413
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          873127823151
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 32171.099297
              },
              {
                "name": "max-rss",
                "cnt": 2835188
              },
              {
                "name": "wall-time",
                "cnt": 22.725441397
              },
              {
                "name": "instructions:u",
                "cnt": 147865075566
              },
              {
                "name": "cycles:u",
                "cnt": 121890875160
              },
              {
                "name": "faults",
                "cnt": 851678
              },
              {
                "name": "cpu-clock",
                "cnt": 32170.717543
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          147865075566
        ],
        [
          "patched incremental: debugging println-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 586719984966
              },
              {
                "name": "wall-time",
                "cnt": 48.478075056
              },
              {
                "name": "cycles:u",
                "cnt": 713684286723
              },
              {
                "name": "task-clock",
                "cnt": 189688.046184
              },
              {
                "name": "cpu-clock",
                "cnt": 189688.180205
              },
              {
                "name": "faults",
                "cnt": 1202788
              },
              {
                "name": "max-rss",
                "cnt": 2919320
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          586719984966
        ],
        [
          "patched incremental: b9b3e592dd cherry picked-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 721613881242
              },
              {
                "name": "cpu-clock",
                "cnt": 239415.417986
              },
              {
                "name": "task-clock",
                "cnt": 239415.130167
              },
              {
                "name": "wall-time",
                "cnt": 58.971640771
              },
              {
                "name": "faults",
                "cnt": 1378620
              },
              {
                "name": "max-rss",
                "cnt": 3202940
              },
              {
                "name": "cycles:u",
                "cnt": 900832555651
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          721613881242
        ]
      ],
      "syn-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 23319
              },
              {
                "name": "max-rss",
                "cnt": 187012
              },
              {
                "name": "task-clock",
                "cnt": 855.393676
              },
              {
                "name": "cycles:u",
                "cnt": 3267259627
              },
              {
                "name": "cpu-clock",
                "cnt": 855.393632
              },
              {
                "name": "instructions:u",
                "cnt": 4398593150
              },
              {
                "name": "wall-time",
                "cnt": 0.87031066
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          4398593150
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 188688
              },
              {
                "name": "cycles:u",
                "cnt": 5312931624
              },
              {
                "name": "instructions:u",
                "cnt": 8859546518
              },
              {
                "name": "faults",
                "cnt": 23850
              },
              {
                "name": "task-clock",
                "cnt": 1368.729299
              },
              {
                "name": "cpu-clock",
                "cnt": 1368.729532
              },
              {
                "name": "wall-time",
                "cnt": 1.37454453
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          8859546518
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 4084929514
              },
              {
                "name": "wall-time",
                "cnt": 1.079928137
              },
              {
                "name": "task-clock",
                "cnt": 1074.159446
              },
              {
                "name": "max-rss",
                "cnt": 227532
              },
              {
                "name": "faults",
                "cnt": 33421
              },
              {
                "name": "instructions:u",
                "cnt": 5483621237
              },
              {
                "name": "cpu-clock",
                "cnt": 1074.159494
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          5483621237
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 32661
              },
              {
                "name": "task-clock",
                "cnt": 472.733803
              },
              {
                "name": "max-rss",
                "cnt": 218260
              },
              {
                "name": "instructions:u",
                "cnt": 2302055428
              },
              {
                "name": "cpu-clock",
                "cnt": 472.742344
              },
              {
                "name": "cycles:u",
                "cnt": 1695770749
              },
              {
                "name": "wall-time",
                "cnt": 0.467199895
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2302055428
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 495.874482
              },
              {
                "name": "instructions:u",
                "cnt": 2423938354
              },
              {
                "name": "faults",
                "cnt": 32626
              },
              {
                "name": "max-rss",
                "cnt": 220496
              },
              {
                "name": "cycles:u",
                "cnt": 1792997506
              },
              {
                "name": "wall-time",
                "cnt": 0.50267346
              },
              {
                "name": "task-clock",
                "cnt": 495.874683
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          2423938354
        ],
        [
          "patched incremental: nll-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1558.418907
              },
              {
                "name": "wall-time",
                "cnt": 1.550598545
              },
              {
                "name": "max-rss",
                "cnt": 236652
              },
              {
                "name": "cycles:u",
                "cnt": 5996076998
              },
              {
                "name": "task-clock",
                "cnt": 1558.418976
              },
              {
                "name": "faults",
                "cnt": 36677
              },
              {
                "name": "instructions:u",
                "cnt": 9714974235
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          9714974235
        ]
      ],
      "helloworld-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 126816
              },
              {
                "name": "cycles:u",
                "cnt": 581401854
              },
              {
                "name": "cpu-clock",
                "cnt": 191.868585
              },
              {
                "name": "instructions:u",
                "cnt": 909387616
              },
              {
                "name": "task-clock",
                "cnt": 191.869984
              },
              {
                "name": "wall-time",
                "cnt": 0.185597653
              },
              {
                "name": "faults",
                "cnt": 16200
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          909387616
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 189.91858
              },
              {
                "name": "max-rss",
                "cnt": 126532
              },
              {
                "name": "instructions:u",
                "cnt": 910540955
              },
              {
                "name": "task-clock",
                "cnt": 189.920734
              },
              {
                "name": "faults",
                "cnt": 16197
              },
              {
                "name": "wall-time",
                "cnt": 0.184916453
              },
              {
                "name": "cycles:u",
                "cnt": 576840070
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          910540955
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 17554
              },
              {
                "name": "cpu-clock",
                "cnt": 201.76993
              },
              {
                "name": "max-rss",
                "cnt": 129192
              },
              {
                "name": "instructions:u",
                "cnt": 939610076
              },
              {
                "name": "task-clock",
                "cnt": 201.771125
              },
              {
                "name": "cycles:u",
                "cnt": 607374365
              },
              {
                "name": "wall-time",
                "cnt": 0.194910656
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          939610076
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 107160
              },
              {
                "name": "faults",
                "cnt": 16423
              },
              {
                "name": "wall-time",
                "cnt": 0.173128618
              },
              {
                "name": "cycles:u",
                "cnt": 503598386
              },
              {
                "name": "task-clock",
                "cnt": 170.377597
              },
              {
                "name": "cpu-clock",
                "cnt": 170.363244
              },
              {
                "name": "instructions:u",
                "cnt": 820853428
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          820853428
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 918494325
              },
              {
                "name": "wall-time",
                "cnt": 0.191881121
              },
              {
                "name": "faults",
                "cnt": 17670
              },
              {
                "name": "task-clock",
                "cnt": 196.594936
              },
              {
                "name": "cpu-clock",
                "cnt": 196.591604
              },
              {
                "name": "max-rss",
                "cnt": 131664
              },
              {
                "name": "cycles:u",
                "cnt": 595265748
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          918494325
        ]
      ],
      "helloworld": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 124360
              },
              {
                "name": "instructions:u",
                "cnt": 876657279
              },
              {
                "name": "cpu-clock",
                "cnt": 189.602415
              },
              {
                "name": "faults",
                "cnt": 16240
              },
              {
                "name": "task-clock",
                "cnt": 189.593718
              },
              {
                "name": "cycles:u",
                "cnt": 569263891
              },
              {
                "name": "wall-time",
                "cnt": 0.185377049
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          876657279
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.182039856
              },
              {
                "name": "cycles:u",
                "cnt": 557172857
              },
              {
                "name": "cpu-clock",
                "cnt": 187.121349
              },
              {
                "name": "max-rss",
                "cnt": 124984
              },
              {
                "name": "task-clock",
                "cnt": 187.123432
              },
              {
                "name": "instructions:u",
                "cnt": 877810743
              },
              {
                "name": "faults",
                "cnt": 16419
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          877810743
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 17906
              },
              {
                "name": "instructions:u",
                "cnt": 934497067
              },
              {
                "name": "max-rss",
                "cnt": 130936
              },
              {
                "name": "task-clock",
                "cnt": 201.03403
              },
              {
                "name": "cpu-clock",
                "cnt": 201.029716
              },
              {
                "name": "cycles:u",
                "cnt": 608693317
              },
              {
                "name": "wall-time",
                "cnt": 0.194464593
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          934497067
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 16404
              },
              {
                "name": "wall-time",
                "cnt": 0.174935462
              },
              {
                "name": "cpu-clock",
                "cnt": 172.579455
              },
              {
                "name": "instructions:u",
                "cnt": 817903389
              },
              {
                "name": "max-rss",
                "cnt": 108812
              },
              {
                "name": "task-clock",
                "cnt": 172.587651
              },
              {
                "name": "cycles:u",
                "cnt": 509874613
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          817903389
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 17921
              },
              {
                "name": "task-clock",
                "cnt": 197.221464
              },
              {
                "name": "cycles:u",
                "cnt": 593941222
              },
              {
                "name": "cpu-clock",
                "cnt": 197.215637
              },
              {
                "name": "max-rss",
                "cnt": 130856
              },
              {
                "name": "instructions:u",
                "cnt": 912095356
              },
              {
                "name": "wall-time",
                "cnt": 0.190811803
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          912095356
        ]
      ],
      "deeply-nested-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 478632588
              },
              {
                "name": "cpu-clock",
                "cnt": 90.532468
              },
              {
                "name": "max-rss",
                "cnt": 116664
              },
              {
                "name": "cycles:u",
                "cnt": 302293299
              },
              {
                "name": "wall-time",
                "cnt": 0.09660586
              },
              {
                "name": "task-clock",
                "cnt": 90.533137
              },
              {
                "name": "faults",
                "cnt": 6472
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          478632588
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 6467
              },
              {
                "name": "cycles:u",
                "cnt": 303625374
              },
              {
                "name": "cpu-clock",
                "cnt": 90.893101
              },
              {
                "name": "wall-time",
                "cnt": 0.097046843
              },
              {
                "name": "instructions:u",
                "cnt": 481584317
              },
              {
                "name": "task-clock",
                "cnt": 90.893444
              },
              {
                "name": "max-rss",
                "cnt": 114780
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          481584317
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 7961
              },
              {
                "name": "cycles:u",
                "cnt": 347249291
              },
              {
                "name": "instructions:u",
                "cnt": 541669136
              },
              {
                "name": "cpu-clock",
                "cnt": 103.846627
              },
              {
                "name": "max-rss",
                "cnt": 123876
              },
              {
                "name": "wall-time",
                "cnt": 0.109376015
              },
              {
                "name": "task-clock",
                "cnt": 103.846416
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          541669136
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 58.299969
              },
              {
                "name": "task-clock",
                "cnt": 58.301108
              },
              {
                "name": "cycles:u",
                "cnt": 171870148
              },
              {
                "name": "max-rss",
                "cnt": 113324
              },
              {
                "name": "faults",
                "cnt": 6897
              },
              {
                "name": "instructions:u",
                "cnt": 265201473
              },
              {
                "name": "wall-time",
                "cnt": 0.063257749
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          265201473
        ]
      ],
      "parser": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 134832
              },
              {
                "name": "faults",
                "cnt": 18090
              },
              {
                "name": "wall-time",
                "cnt": 0.228368721
              },
              {
                "name": "cpu-clock",
                "cnt": 233.948628
              },
              {
                "name": "task-clock",
                "cnt": 233.95272
              },
              {
                "name": "cycles:u",
                "cnt": 737228433
              },
              {
                "name": "instructions:u",
                "cnt": 1112921450
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          1112921450
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 871787234
              },
              {
                "name": "task-clock",
                "cnt": 269.747289
              },
              {
                "name": "wall-time",
                "cnt": 0.263735044
              },
              {
                "name": "faults",
                "cnt": 18098
              },
              {
                "name": "max-rss",
                "cnt": 135072
              },
              {
                "name": "cpu-clock",
                "cnt": 269.74453
              },
              {
                "name": "instructions:u",
                "cnt": 1407988826
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          1407988826
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 261.888057
              },
              {
                "name": "cpu-clock",
                "cnt": 261.883853
              },
              {
                "name": "wall-time",
                "cnt": 0.255097482
              },
              {
                "name": "instructions:u",
                "cnt": 1241902940
              },
              {
                "name": "faults",
                "cnt": 20133
              },
              {
                "name": "max-rss",
                "cnt": 144388
              },
              {
                "name": "cycles:u",
                "cnt": 835010691
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          1241902940
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 18853
              },
              {
                "name": "instructions:u",
                "cnt": 931109319
              },
              {
                "name": "cycles:u",
                "cnt": 587304204
              },
              {
                "name": "task-clock",
                "cnt": 195.991661
              },
              {
                "name": "max-rss",
                "cnt": 125856
              },
              {
                "name": "cpu-clock",
                "cnt": 195.982878
              },
              {
                "name": "wall-time",
                "cnt": 0.197578536
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          931109319
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 926439596
              },
              {
                "name": "max-rss",
                "cnt": 125692
              },
              {
                "name": "wall-time",
                "cnt": 0.195282726
              },
              {
                "name": "cpu-clock",
                "cnt": 194.206991
              },
              {
                "name": "cycles:u",
                "cnt": 579498177
              },
              {
                "name": "task-clock",
                "cnt": 194.227909
              },
              {
                "name": "faults",
                "cnt": 18847
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          926439596
        ]
      ],
      "issue-46449-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.090857455
              },
              {
                "name": "cpu-clock",
                "cnt": 84.319753
              },
              {
                "name": "cycles:u",
                "cnt": 270475138
              },
              {
                "name": "max-rss",
                "cnt": 123072
              },
              {
                "name": "task-clock",
                "cnt": 84.320872
              },
              {
                "name": "faults",
                "cnt": 7780
              },
              {
                "name": "instructions:u",
                "cnt": 396967008
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          396967008
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 85.820132
              },
              {
                "name": "max-rss",
                "cnt": 123636
              },
              {
                "name": "wall-time",
                "cnt": 0.091711914
              },
              {
                "name": "cpu-clock",
                "cnt": 85.828513
              },
              {
                "name": "instructions:u",
                "cnt": 405143202
              },
              {
                "name": "faults",
                "cnt": 7803
              },
              {
                "name": "cycles:u",
                "cnt": 274539695
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          405143202
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 479250789
              },
              {
                "name": "max-rss",
                "cnt": 130700
              },
              {
                "name": "cycles:u",
                "cnt": 326778634
              },
              {
                "name": "wall-time",
                "cnt": 0.106394694
              },
              {
                "name": "faults",
                "cnt": 9501
              },
              {
                "name": "cpu-clock",
                "cnt": 100.973777
              },
              {
                "name": "task-clock",
                "cnt": 100.974875
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          479250789
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 9629
              },
              {
                "name": "task-clock",
                "cnt": 84.018713
              },
              {
                "name": "max-rss",
                "cnt": 129680
              },
              {
                "name": "wall-time",
                "cnt": 0.088798369
              },
              {
                "name": "cycles:u",
                "cnt": 258157780
              },
              {
                "name": "instructions:u",
                "cnt": 383638994
              },
              {
                "name": "cpu-clock",
                "cnt": 84.016997
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          383638994
        ],
        [
          "patched incremental: io error 6144-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 94.512729
              },
              {
                "name": "instructions:u",
                "cnt": 439020864
              },
              {
                "name": "wall-time",
                "cnt": 0.099236309
              },
              {
                "name": "faults",
                "cnt": 9692
              },
              {
                "name": "cpu-clock",
                "cnt": 94.51108
              },
              {
                "name": "max-rss",
                "cnt": 131532
              },
              {
                "name": "cycles:u",
                "cnt": 301219814
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          439020864
        ],
        [
          "patched incremental: u32 3072-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 95.211312
              },
              {
                "name": "task-clock",
                "cnt": 95.212714
              },
              {
                "name": "cycles:u",
                "cnt": 302296569
              },
              {
                "name": "wall-time",
                "cnt": 0.100118122
              },
              {
                "name": "max-rss",
                "cnt": 131492
              },
              {
                "name": "instructions:u",
                "cnt": 438546755
              },
              {
                "name": "faults",
                "cnt": 9693
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          438546755
        ],
        [
          "patched incremental: u8 3072-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 131020
              },
              {
                "name": "faults",
                "cnt": 9660
              },
              {
                "name": "instructions:u",
                "cnt": 384550231
              },
              {
                "name": "cycles:u",
                "cnt": 260247539
              },
              {
                "name": "cpu-clock",
                "cnt": 84.728786
              },
              {
                "name": "wall-time",
                "cnt": 0.089386604
              },
              {
                "name": "task-clock",
                "cnt": 84.74002
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          384550231
        ],
        [
          "patched incremental: empty 3072-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 131604
              },
              {
                "name": "instructions:u",
                "cnt": 438997888
              },
              {
                "name": "task-clock",
                "cnt": 95.20066
              },
              {
                "name": "cpu-clock",
                "cnt": 95.200444
              },
              {
                "name": "faults",
                "cnt": 9711
              },
              {
                "name": "wall-time",
                "cnt": 0.09983055
              },
              {
                "name": "cycles:u",
                "cnt": 304585690
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          438997888
        ],
        [
          "patched incremental: static str 6144-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 95.159044
              },
              {
                "name": "cpu-clock",
                "cnt": 95.158239
              },
              {
                "name": "max-rss",
                "cnt": 131556
              },
              {
                "name": "faults",
                "cnt": 9689
              },
              {
                "name": "cycles:u",
                "cnt": 304148003
              },
              {
                "name": "wall-time",
                "cnt": 0.099819562
              },
              {
                "name": "instructions:u",
                "cnt": 439762111
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          439762111
        ]
      ],
      "tuple-stress": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 4648.182868
              },
              {
                "name": "faults",
                "cnt": 123867
              },
              {
                "name": "max-rss",
                "cnt": 397536
              },
              {
                "name": "cycles:u",
                "cnt": 17900977485
              },
              {
                "name": "wall-time",
                "cnt": 4.632624588
              },
              {
                "name": "instructions:u",
                "cnt": 28191420747
              },
              {
                "name": "task-clock",
                "cnt": 4648.188699
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          28191420747
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5387.201623
              },
              {
                "name": "faults",
                "cnt": 128221
              },
              {
                "name": "cycles:u",
                "cnt": 20613744706
              },
              {
                "name": "instructions:u",
                "cnt": 34891806751
              },
              {
                "name": "task-clock",
                "cnt": 5387.217172
              },
              {
                "name": "max-rss",
                "cnt": 399072
              },
              {
                "name": "wall-time",
                "cnt": 5.351332454
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          34891806751
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.649768998
              },
              {
                "name": "instructions:u",
                "cnt": 9605462352
              },
              {
                "name": "cpu-clock",
                "cnt": 1648.765283
              },
              {
                "name": "cycles:u",
                "cnt": 5981745010
              },
              {
                "name": "task-clock",
                "cnt": 1648.778386
              },
              {
                "name": "faults",
                "cnt": 97724
              },
              {
                "name": "max-rss",
                "cnt": 332388
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          9605462352
        ],
        [
          "patched incremental: new row",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 418520
              },
              {
                "name": "cycles:u",
                "cnt": 20756901777
              },
              {
                "name": "instructions:u",
                "cnt": 34812622731
              },
              {
                "name": "task-clock",
                "cnt": 5404.88082
              },
              {
                "name": "faults",
                "cnt": 144212
              },
              {
                "name": "wall-time",
                "cnt": 5.369138997
              },
              {
                "name": "cpu-clock",
                "cnt": 5404.904542
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          34812622731
        ]
      ],
      "helloworld-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 5574
              },
              {
                "name": "cpu-clock",
                "cnt": 53.419385
              },
              {
                "name": "instructions:u",
                "cnt": 242006920
              },
              {
                "name": "task-clock",
                "cnt": 53.420641
              },
              {
                "name": "cycles:u",
                "cnt": 161550657
              },
              {
                "name": "max-rss",
                "cnt": 100688
              },
              {
                "name": "wall-time",
                "cnt": 0.061675311
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          242006920
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 53.798547
              },
              {
                "name": "max-rss",
                "cnt": 100692
              },
              {
                "name": "instructions:u",
                "cnt": 243094116
              },
              {
                "name": "cycles:u",
                "cnt": 162283009
              },
              {
                "name": "wall-time",
                "cnt": 0.060129303
              },
              {
                "name": "task-clock",
                "cnt": 53.799392
              },
              {
                "name": "faults",
                "cnt": 5569
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          243094116
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 106588
              },
              {
                "name": "cycles:u",
                "cnt": 183781197
              },
              {
                "name": "cpu-clock",
                "cnt": 60.837427
              },
              {
                "name": "task-clock",
                "cnt": 60.838756
              },
              {
                "name": "instructions:u",
                "cnt": 270960941
              },
              {
                "name": "wall-time",
                "cnt": 0.066603936
              },
              {
                "name": "faults",
                "cnt": 6772
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          270960941
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 49.031961
              },
              {
                "name": "wall-time",
                "cnt": 0.054334984
              },
              {
                "name": "cpu-clock",
                "cnt": 49.030655
              },
              {
                "name": "max-rss",
                "cnt": 87344
              },
              {
                "name": "cycles:u",
                "cnt": 143275304
              },
              {
                "name": "faults",
                "cnt": 5882
              },
              {
                "name": "instructions:u",
                "cnt": 217901482
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          217901482
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.064894328
              },
              {
                "name": "task-clock",
                "cnt": 59.353411
              },
              {
                "name": "cpu-clock",
                "cnt": 59.352664
              },
              {
                "name": "instructions:u",
                "cnt": 264034865
              },
              {
                "name": "max-rss",
                "cnt": 107220
              },
              {
                "name": "faults",
                "cnt": 6842
              },
              {
                "name": "cycles:u",
                "cnt": 178256800
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          264034865
        ]
      ],
      "style-servo-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 32261.496003
              },
              {
                "name": "wall-time",
                "cnt": 32.290797506
              },
              {
                "name": "faults",
                "cnt": 389350
              },
              {
                "name": "instructions:u",
                "cnt": 161500313323
              },
              {
                "name": "cpu-clock",
                "cnt": 32261.503012
              },
              {
                "name": "max-rss",
                "cnt": 1401708
              },
              {
                "name": "cycles:u",
                "cnt": 126810488040
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          161500313323
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 38654.969055
              },
              {
                "name": "cycles:u",
                "cnt": 151325250324
              },
              {
                "name": "task-clock",
                "cnt": 38654.956321
              },
              {
                "name": "instructions:u",
                "cnt": 194566351667
              },
              {
                "name": "wall-time",
                "cnt": 38.699377766
              },
              {
                "name": "faults",
                "cnt": 588689
              },
              {
                "name": "max-rss",
                "cnt": 2119816
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          194566351667
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 16032.973981
              },
              {
                "name": "max-rss",
                "cnt": 2023304
              },
              {
                "name": "cpu-clock",
                "cnt": 16033.004907
              },
              {
                "name": "wall-time",
                "cnt": 15.71962618
              },
              {
                "name": "faults",
                "cnt": 568715
              },
              {
                "name": "instructions:u",
                "cnt": 76606672998
              },
              {
                "name": "cycles:u",
                "cnt": 61343558401
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          76606672998
        ],
        [
          "patched incremental: debugging println-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 94542968195
              },
              {
                "name": "task-clock",
                "cnt": 24657.31062
              },
              {
                "name": "max-rss",
                "cnt": 2141036
              },
              {
                "name": "wall-time",
                "cnt": 24.282147732
              },
              {
                "name": "faults",
                "cnt": 599957
              },
              {
                "name": "instructions:u",
                "cnt": 120796675202
              },
              {
                "name": "cpu-clock",
                "cnt": 24657.335745
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "debugging println",
                "path": "0-debugging-println.patch"
              }
            }
          },
          120796675202
        ],
        [
          "patched incremental: b9b3e592dd cherry picked-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 146305346233
              },
              {
                "name": "cycles:u",
                "cnt": 115824497215
              },
              {
                "name": "task-clock",
                "cnt": 30028.988114
              },
              {
                "name": "max-rss",
                "cnt": 2320460
              },
              {
                "name": "cpu-clock",
                "cnt": 30028.999417
              },
              {
                "name": "faults",
                "cnt": 644965
              },
              {
                "name": "wall-time",
                "cnt": 29.649182833
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "b9b3e592dd cherry picked",
                "path": "1-b9b3e592dd-cherry-picked.patch"
              }
            }
          },
          146305346233
        ]
      ],
      "deeply-nested": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 132984
              },
              {
                "name": "instructions:u",
                "cnt": 815698324
              },
              {
                "name": "cpu-clock",
                "cnt": 177.795749
              },
              {
                "name": "wall-time",
                "cnt": 0.154116576
              },
              {
                "name": "faults",
                "cnt": 9089
              },
              {
                "name": "cycles:u",
                "cnt": 615022803
              },
              {
                "name": "task-clock",
                "cnt": 177.799512
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          815698324
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 178.119166
              },
              {
                "name": "instructions:u",
                "cnt": 818718087
              },
              {
                "name": "cycles:u",
                "cnt": 615830859
              },
              {
                "name": "wall-time",
                "cnt": 0.155098501
              },
              {
                "name": "task-clock",
                "cnt": 178.125837
              },
              {
                "name": "faults",
                "cnt": 9084
              },
              {
                "name": "max-rss",
                "cnt": 132736
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          818718087
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10644
              },
              {
                "name": "instructions:u",
                "cnt": 905619603
              },
              {
                "name": "cycles:u",
                "cnt": 683722572
              },
              {
                "name": "max-rss",
                "cnt": 138808
              },
              {
                "name": "wall-time",
                "cnt": 0.169904742
              },
              {
                "name": "task-clock",
                "cnt": 197.20981
              },
              {
                "name": "cpu-clock",
                "cnt": 197.213505
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          905619603
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.082453195
              },
              {
                "name": "instructions:u",
                "cnt": 358148774
              },
              {
                "name": "cycles:u",
                "cnt": 239771905
              },
              {
                "name": "cpu-clock",
                "cnt": 79.373421
              },
              {
                "name": "faults",
                "cnt": 8266
              },
              {
                "name": "task-clock",
                "cnt": 79.386321
              },
              {
                "name": "max-rss",
                "cnt": 124020
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          358148774
        ]
      ],
      "hyper-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5822968402
              },
              {
                "name": "faults",
                "cnt": 25776
              },
              {
                "name": "cpu-clock",
                "cnt": 1257.060783
              },
              {
                "name": "wall-time",
                "cnt": 1.2694106
              },
              {
                "name": "max-rss",
                "cnt": 195524
              },
              {
                "name": "task-clock",
                "cnt": 1257.060834
              },
              {
                "name": "cycles:u",
                "cnt": 4833497802
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5822968402
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.68918282
              },
              {
                "name": "cpu-clock",
                "cnt": 1683.172686
              },
              {
                "name": "max-rss",
                "cnt": 198668
              },
              {
                "name": "task-clock",
                "cnt": 1683.172371
              },
              {
                "name": "cycles:u",
                "cnt": 6518435841
              },
              {
                "name": "instructions:u",
                "cnt": 9359724200
              },
              {
                "name": "faults",
                "cnt": 26942
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          9359724200
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1584.285226
              },
              {
                "name": "cycles:u",
                "cnt": 6077922057
              },
              {
                "name": "max-rss",
                "cnt": 255176
              },
              {
                "name": "faults",
                "cnt": 40668
              },
              {
                "name": "wall-time",
                "cnt": 1.589934079
              },
              {
                "name": "instructions:u",
                "cnt": 7421082326
              },
              {
                "name": "task-clock",
                "cnt": 1584.29259
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          7421082326
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2306609575
              },
              {
                "name": "task-clock",
                "cnt": 637.416398
              },
              {
                "name": "wall-time",
                "cnt": 0.625096424
              },
              {
                "name": "instructions:u",
                "cnt": 2980919939
              },
              {
                "name": "faults",
                "cnt": 40235
              },
              {
                "name": "cpu-clock",
                "cnt": 637.415503
              },
              {
                "name": "max-rss",
                "cnt": 245640
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2980919939
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3025396031
              },
              {
                "name": "wall-time",
                "cnt": 0.632445456
              },
              {
                "name": "cpu-clock",
                "cnt": 646.482682
              },
              {
                "name": "max-rss",
                "cnt": 245848
              },
              {
                "name": "cycles:u",
                "cnt": 2336229605
              },
              {
                "name": "task-clock",
                "cnt": 646.483722
              },
              {
                "name": "faults",
                "cnt": 40079
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3025396031
        ]
      ],
      "crates.io-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 41832183348
              },
              {
                "name": "faults",
                "cnt": 85030
              },
              {
                "name": "task-clock",
                "cnt": 7576.192631
              },
              {
                "name": "cycles:u",
                "cnt": 29595482296
              },
              {
                "name": "cpu-clock",
                "cnt": 7576.19618
              },
              {
                "name": "wall-time",
                "cnt": 7.608143222
              },
              {
                "name": "max-rss",
                "cnt": 416116
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          41832183348
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 8858.541811
              },
              {
                "name": "max-rss",
                "cnt": 578488
              },
              {
                "name": "faults",
                "cnt": 125965
              },
              {
                "name": "cycles:u",
                "cnt": 34494532114
              },
              {
                "name": "wall-time",
                "cnt": 8.897433616
              },
              {
                "name": "instructions:u",
                "cnt": 48134759035
              },
              {
                "name": "task-clock",
                "cnt": 8858.538264
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          48134759035
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 15039731962
              },
              {
                "name": "cycles:u",
                "cnt": 11398872689
              },
              {
                "name": "cpu-clock",
                "cnt": 3059.076445
              },
              {
                "name": "task-clock",
                "cnt": 3059.074743
              },
              {
                "name": "faults",
                "cnt": 124520
              },
              {
                "name": "max-rss",
                "cnt": 552520
              },
              {
                "name": "wall-time",
                "cnt": 3.002573274
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          15039731962
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 11678287505
              },
              {
                "name": "task-clock",
                "cnt": 3124.509466
              },
              {
                "name": "cpu-clock",
                "cnt": 3124.510179
              },
              {
                "name": "faults",
                "cnt": 122948
              },
              {
                "name": "instructions:u",
                "cnt": 15640467211
              },
              {
                "name": "wall-time",
                "cnt": 3.06847787
              },
              {
                "name": "max-rss",
                "cnt": 545728
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          15640467211
        ]
      ],
      "tokio-webpush-simple-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 26973.42783
              },
              {
                "name": "cpu-clock",
                "cnt": 26973.441673
              },
              {
                "name": "wall-time",
                "cnt": 5.021987906
              },
              {
                "name": "instructions:u",
                "cnt": 79753230034
              },
              {
                "name": "faults",
                "cnt": 123711
              },
              {
                "name": "max-rss",
                "cnt": 289900
              },
              {
                "name": "cycles:u",
                "cnt": 101190002815
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          79753230034
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 287256
              },
              {
                "name": "cpu-clock",
                "cnt": 27207.433303
              },
              {
                "name": "faults",
                "cnt": 123766
              },
              {
                "name": "cycles:u",
                "cnt": 102059872244
              },
              {
                "name": "task-clock",
                "cnt": 27207.41812
              },
              {
                "name": "wall-time",
                "cnt": 5.099819138
              },
              {
                "name": "instructions:u",
                "cnt": 80528677394
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          80528677394
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 328612
              },
              {
                "name": "wall-time",
                "cnt": 4.090740688
              },
              {
                "name": "cycles:u",
                "cnt": 81110028648
              },
              {
                "name": "faults",
                "cnt": 108161
              },
              {
                "name": "cpu-clock",
                "cnt": 21662.611743
              },
              {
                "name": "task-clock",
                "cnt": 21662.572921
              },
              {
                "name": "instructions:u",
                "cnt": 60688756669
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          60688756669
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 931.288308
              },
              {
                "name": "cycles:u",
                "cnt": 3068657157
              },
              {
                "name": "task-clock",
                "cnt": 931.334607
              },
              {
                "name": "faults",
                "cnt": 70096
              },
              {
                "name": "max-rss",
                "cnt": 295608
              },
              {
                "name": "wall-time",
                "cnt": 0.90262027
              },
              {
                "name": "instructions:u",
                "cnt": 3649028013
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3649028013
        ],
        [
          "patched incremental: minor change-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 21407.911934
              },
              {
                "name": "instructions:u",
                "cnt": 59033699814
              },
              {
                "name": "max-rss",
                "cnt": 335928
              },
              {
                "name": "cycles:u",
                "cnt": 80021802376
              },
              {
                "name": "wall-time",
                "cnt": 3.733050113
              },
              {
                "name": "cpu-clock",
                "cnt": 21407.9537
              },
              {
                "name": "faults",
                "cnt": 113199
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "minor change",
                "path": "0-minor-change.patch"
              }
            }
          },
          59033699814
        ]
      ],
      "crates.io-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 138537.381414
              },
              {
                "name": "wall-time",
                "cnt": 29.912588191
              },
              {
                "name": "faults",
                "cnt": 560014
              },
              {
                "name": "instructions:u",
                "cnt": 430967433683
              },
              {
                "name": "cycles:u",
                "cnt": 521698165464
              },
              {
                "name": "max-rss",
                "cnt": 735184
              },
              {
                "name": "task-clock",
                "cnt": 138537.26977
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          430967433683
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 304418158075
              },
              {
                "name": "faults",
                "cnt": 412722
              },
              {
                "name": "cycles:u",
                "cnt": 383777443422
              },
              {
                "name": "task-clock",
                "cnt": 101821.660503
              },
              {
                "name": "max-rss",
                "cnt": 885400
              },
              {
                "name": "wall-time",
                "cnt": 23.320779783
              },
              {
                "name": "cpu-clock",
                "cnt": 101821.849184
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          304418158075
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 20006623803
              },
              {
                "name": "cycles:u",
                "cnt": 15996419183
              },
              {
                "name": "max-rss",
                "cnt": 818764
              },
              {
                "name": "task-clock",
                "cnt": 4332.897633
              },
              {
                "name": "cpu-clock",
                "cnt": 4332.817698
              },
              {
                "name": "faults",
                "cnt": 183612
              },
              {
                "name": "wall-time",
                "cnt": 4.212219826
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          20006623803
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 184424
              },
              {
                "name": "task-clock",
                "cnt": 5239.241969
              },
              {
                "name": "wall-time",
                "cnt": 4.382886776
              },
              {
                "name": "cpu-clock",
                "cnt": 5239.082129
              },
              {
                "name": "instructions:u",
                "cnt": 23801031874
              },
              {
                "name": "cycles:u",
                "cnt": 19475876185
              },
              {
                "name": "max-rss",
                "cnt": 808668
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          23801031874
        ]
      ],
      "unused-warnings-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 27106
              },
              {
                "name": "instructions:u",
                "cnt": 1928835354
              },
              {
                "name": "task-clock",
                "cnt": 355.69702
              },
              {
                "name": "max-rss",
                "cnt": 133388
              },
              {
                "name": "cycles:u",
                "cnt": 1271271266
              },
              {
                "name": "wall-time",
                "cnt": 0.361382919
              },
              {
                "name": "cpu-clock",
                "cnt": 355.696251
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          1928835354
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 354.094658
              },
              {
                "name": "max-rss",
                "cnt": 132884
              },
              {
                "name": "cpu-clock",
                "cnt": 354.093704
              },
              {
                "name": "cycles:u",
                "cnt": 1272262686
              },
              {
                "name": "faults",
                "cnt": 27285
              },
              {
                "name": "instructions:u",
                "cnt": 1928883777
              },
              {
                "name": "wall-time",
                "cnt": 0.359631216
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          1928883777
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2895946830
              },
              {
                "name": "task-clock",
                "cnt": 559.851863
              },
              {
                "name": "cpu-clock",
                "cnt": 559.850968
              },
              {
                "name": "wall-time",
                "cnt": 0.565813127
              },
              {
                "name": "cycles:u",
                "cnt": 1991797942
              },
              {
                "name": "faults",
                "cnt": 49970
              },
              {
                "name": "max-rss",
                "cnt": 202772
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          2895946830
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 52171
              },
              {
                "name": "cycles:u",
                "cnt": 2013308573
              },
              {
                "name": "max-rss",
                "cnt": 202804
              },
              {
                "name": "wall-time",
                "cnt": 0.547579923
              },
              {
                "name": "instructions:u",
                "cnt": 2682233229
              },
              {
                "name": "task-clock",
                "cnt": 569.634594
              },
              {
                "name": "cpu-clock",
                "cnt": 569.635975
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2682233229
        ],
        [
          "patched incremental: dummy fn-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 563.958666
              },
              {
                "name": "max-rss",
                "cnt": 216752
              },
              {
                "name": "faults",
                "cnt": 51342
              },
              {
                "name": "cycles:u",
                "cnt": 1993193756
              },
              {
                "name": "cpu-clock",
                "cnt": 563.957928
              },
              {
                "name": "wall-time",
                "cnt": 0.542527557
              },
              {
                "name": "instructions:u",
                "cnt": 2687976226
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          2687976226
        ]
      ],
      "html5ever-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 8560.358293
              },
              {
                "name": "instructions:u",
                "cnt": 34053553661
              },
              {
                "name": "wall-time",
                "cnt": 3.558285847
              },
              {
                "name": "faults",
                "cnt": 105024
              },
              {
                "name": "max-rss",
                "cnt": 276528
              },
              {
                "name": "cycles:u",
                "cnt": 32095954243
              },
              {
                "name": "cpu-clock",
                "cnt": 8560.373478
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          34053553661
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 324356
              },
              {
                "name": "cycles:u",
                "cnt": 27025508671
              },
              {
                "name": "task-clock",
                "cnt": 7121.507742
              },
              {
                "name": "instructions:u",
                "cnt": 30983182009
              },
              {
                "name": "faults",
                "cnt": 80648
              },
              {
                "name": "cpu-clock",
                "cnt": 7121.530727
              },
              {
                "name": "wall-time",
                "cnt": 3.659194448
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          30983182009
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1127.553485
              },
              {
                "name": "instructions:u",
                "cnt": 6685689617
              },
              {
                "name": "max-rss",
                "cnt": 279288
              },
              {
                "name": "wall-time",
                "cnt": 1.109820408
              },
              {
                "name": "cpu-clock",
                "cnt": 1127.550851
              },
              {
                "name": "cycles:u",
                "cnt": 4128182293
              },
              {
                "name": "faults",
                "cnt": 58549
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          6685689617
        ]
      ],
      "tuple-stress-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 13166581117
              },
              {
                "name": "faults",
                "cnt": 93614
              },
              {
                "name": "cpu-clock",
                "cnt": 3405.196901
              },
              {
                "name": "task-clock",
                "cnt": 3405.197809
              },
              {
                "name": "wall-time",
                "cnt": 3.411672831
              },
              {
                "name": "instructions:u",
                "cnt": 19685679943
              },
              {
                "name": "max-rss",
                "cnt": 331572
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          19685679943
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 15215699606
              },
              {
                "name": "wall-time",
                "cnt": 3.929289142
              },
              {
                "name": "cpu-clock",
                "cnt": 3923.301306
              },
              {
                "name": "instructions:u",
                "cnt": 24069017866
              },
              {
                "name": "max-rss",
                "cnt": 340364
              },
              {
                "name": "faults",
                "cnt": 98995
              },
              {
                "name": "task-clock",
                "cnt": 3923.300752
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          24069017866
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 59547
              },
              {
                "name": "cycles:u",
                "cnt": 4619453125
              },
              {
                "name": "cpu-clock",
                "cnt": 1227.265828
              },
              {
                "name": "wall-time",
                "cnt": 1.232926103
              },
              {
                "name": "instructions:u",
                "cnt": 7159283687
              },
              {
                "name": "task-clock",
                "cnt": 1227.265365
              },
              {
                "name": "max-rss",
                "cnt": 246076
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          7159283687
        ],
        [
          "patched incremental: new row-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 3916.337347
              },
              {
                "name": "cpu-clock",
                "cnt": 3916.339377
              },
              {
                "name": "wall-time",
                "cnt": 3.921885815
              },
              {
                "name": "max-rss",
                "cnt": 360636
              },
              {
                "name": "instructions:u",
                "cnt": 24050964402
              },
              {
                "name": "faults",
                "cnt": 107803
              },
              {
                "name": "cycles:u",
                "cnt": 15125519451
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "new row",
                "path": "0-new-row.patch"
              }
            }
          },
          24050964402
        ]
      ],
      "futures-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 780.27535
              },
              {
                "name": "task-clock",
                "cnt": 780.27589
              },
              {
                "name": "instructions:u",
                "cnt": 4422325164
              },
              {
                "name": "cycles:u",
                "cnt": 3014270611
              },
              {
                "name": "faults",
                "cnt": 13236
              },
              {
                "name": "wall-time",
                "cnt": 0.799189461
              },
              {
                "name": "max-rss",
                "cnt": 147832
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          4422325164
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5459466897
              },
              {
                "name": "cycles:u",
                "cnt": 3593751822
              },
              {
                "name": "max-rss",
                "cnt": 149004
              },
              {
                "name": "wall-time",
                "cnt": 0.933949339
              },
              {
                "name": "task-clock",
                "cnt": 928.07786
              },
              {
                "name": "cpu-clock",
                "cnt": 928.077935
              },
              {
                "name": "faults",
                "cnt": 13617
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          5459466897
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 174476
              },
              {
                "name": "cpu-clock",
                "cnt": 940.421976
              },
              {
                "name": "faults",
                "cnt": 19466
              },
              {
                "name": "cycles:u",
                "cnt": 3620428899
              },
              {
                "name": "instructions:u",
                "cnt": 5168292405
              },
              {
                "name": "task-clock",
                "cnt": 940.42224
              },
              {
                "name": "wall-time",
                "cnt": 0.949621245
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          5168292405
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1072007068
              },
              {
                "name": "faults",
                "cnt": 20163
              },
              {
                "name": "cpu-clock",
                "cnt": 302.140402
              },
              {
                "name": "max-rss",
                "cnt": 171640
              },
              {
                "name": "wall-time",
                "cnt": 0.298381155
              },
              {
                "name": "instructions:u",
                "cnt": 1548632543
              },
              {
                "name": "task-clock",
                "cnt": 302.13962
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1548632543
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 295.472472
              },
              {
                "name": "wall-time",
                "cnt": 0.292125094
              },
              {
                "name": "cpu-clock",
                "cnt": 295.472677
              },
              {
                "name": "cycles:u",
                "cnt": 1045795622
              },
              {
                "name": "faults",
                "cnt": 19876
              },
              {
                "name": "max-rss",
                "cnt": 170248
              },
              {
                "name": "instructions:u",
                "cnt": 1537754921
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1537754921
        ]
      ],
      "issue-46449-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 661.754868
              },
              {
                "name": "cycles:u",
                "cnt": 2431724243
              },
              {
                "name": "task-clock",
                "cnt": 661.747253
              },
              {
                "name": "instructions:u",
                "cnt": 2303324958
              },
              {
                "name": "wall-time",
                "cnt": 0.26799095
              },
              {
                "name": "faults",
                "cnt": 12760
              },
              {
                "name": "max-rss",
                "cnt": 150844
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          2303324958
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2426326749
              },
              {
                "name": "task-clock",
                "cnt": 661.396757
              },
              {
                "name": "max-rss",
                "cnt": 150720
              },
              {
                "name": "instructions:u",
                "cnt": 2310920219
              },
              {
                "name": "cpu-clock",
                "cnt": 661.395112
              },
              {
                "name": "faults",
                "cnt": 12741
              },
              {
                "name": "wall-time",
                "cnt": 0.261951297
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          2310920219
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1954719605
              },
              {
                "name": "wall-time",
                "cnt": 0.242746885
              },
              {
                "name": "cpu-clock",
                "cnt": 571.759239
              },
              {
                "name": "max-rss",
                "cnt": 152040
              },
              {
                "name": "task-clock",
                "cnt": 571.754893
              },
              {
                "name": "faults",
                "cnt": 14318
              },
              {
                "name": "cycles:u",
                "cnt": 2073812257
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1954719605
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10091
              },
              {
                "name": "wall-time",
                "cnt": 0.103547988
              },
              {
                "name": "cycles:u",
                "cnt": 315997226
              },
              {
                "name": "cpu-clock",
                "cnt": 100.654516
              },
              {
                "name": "instructions:u",
                "cnt": 448283796
              },
              {
                "name": "max-rss",
                "cnt": 135412
              },
              {
                "name": "task-clock",
                "cnt": 100.664556
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          448283796
        ],
        [
          "patched incremental: io error 6144-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 572.330479
              },
              {
                "name": "cycles:u",
                "cnt": 2075282557
              },
              {
                "name": "task-clock",
                "cnt": 572.335638
              },
              {
                "name": "wall-time",
                "cnt": 0.24139758
              },
              {
                "name": "instructions:u",
                "cnt": 1960960831
              },
              {
                "name": "faults",
                "cnt": 14752
              },
              {
                "name": "max-rss",
                "cnt": 153496
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "io error 6144",
                "path": "0-io-error-6144.patch"
              }
            }
          },
          1960960831
        ],
        [
          "patched incremental: u32 3072-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1303314303
              },
              {
                "name": "max-rss",
                "cnt": 153644
              },
              {
                "name": "wall-time",
                "cnt": 0.175831686
              },
              {
                "name": "cycles:u",
                "cnt": 1285814560
              },
              {
                "name": "task-clock",
                "cnt": 366.317537
              },
              {
                "name": "cpu-clock",
                "cnt": 366.320226
              },
              {
                "name": "faults",
                "cnt": 14249
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "u32 3072",
                "path": "1-u32-3072.patch"
              }
            }
          },
          1303314303
        ],
        [
          "patched incremental: u8 3072-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1238309905
              },
              {
                "name": "faults",
                "cnt": 14043
              },
              {
                "name": "cycles:u",
                "cnt": 1258369958
              },
              {
                "name": "wall-time",
                "cnt": 0.162144063
              },
              {
                "name": "task-clock",
                "cnt": 357.231429
              },
              {
                "name": "cpu-clock",
                "cnt": 357.22526
              },
              {
                "name": "max-rss",
                "cnt": 153376
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "u8 3072",
                "path": "2-u8-3072.patch"
              }
            }
          },
          1238309905
        ],
        [
          "patched incremental: empty 3072-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 359.289501
              },
              {
                "name": "wall-time",
                "cnt": 0.174565783
              },
              {
                "name": "instructions:u",
                "cnt": 1285340541
              },
              {
                "name": "task-clock",
                "cnt": 359.291489
              },
              {
                "name": "faults",
                "cnt": 14209
              },
              {
                "name": "cycles:u",
                "cnt": 1263571526
              },
              {
                "name": "max-rss",
                "cnt": 155700
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "empty 3072",
                "path": "3-empty-3072.patch"
              }
            }
          },
          1285340541
        ],
        [
          "patched incremental: static str 6144-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.177134812
              },
              {
                "name": "instructions:u",
                "cnt": 1299478899
              },
              {
                "name": "cpu-clock",
                "cnt": 365.159329
              },
              {
                "name": "cycles:u",
                "cnt": 1286811776
              },
              {
                "name": "task-clock",
                "cnt": 365.165735
              },
              {
                "name": "faults",
                "cnt": 14121
              },
              {
                "name": "max-rss",
                "cnt": 154520
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "static str 6144",
                "path": "4-static-str-6144.patch"
              }
            }
          },
          1299478899
        ]
      ],
      "parser-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.231821071
              },
              {
                "name": "faults",
                "cnt": 17896
              },
              {
                "name": "instructions:u",
                "cnt": 1146768616
              },
              {
                "name": "cycles:u",
                "cnt": 758523588
              },
              {
                "name": "cpu-clock",
                "cnt": 238.224477
              },
              {
                "name": "task-clock",
                "cnt": 238.226778
              },
              {
                "name": "max-rss",
                "cnt": 136196
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1146768616
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 1441558942
              },
              {
                "name": "max-rss",
                "cnt": 137416
              },
              {
                "name": "task-clock",
                "cnt": 272.048838
              },
              {
                "name": "cycles:u",
                "cnt": 893993562
              },
              {
                "name": "faults",
                "cnt": 18037
              },
              {
                "name": "cpu-clock",
                "cnt": 272.054288
              },
              {
                "name": "wall-time",
                "cnt": 0.266061105
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1441558942
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.253678593
              },
              {
                "name": "max-rss",
                "cnt": 144148
              },
              {
                "name": "task-clock",
                "cnt": 261.076832
              },
              {
                "name": "cpu-clock",
                "cnt": 261.074453
              },
              {
                "name": "cycles:u",
                "cnt": 835919541
              },
              {
                "name": "faults",
                "cnt": 19844
              },
              {
                "name": "instructions:u",
                "cnt": 1247783582
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1247783582
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.194951161
              },
              {
                "name": "faults",
                "cnt": 18861
              },
              {
                "name": "cpu-clock",
                "cnt": 194.7737
              },
              {
                "name": "max-rss",
                "cnt": 126500
              },
              {
                "name": "task-clock",
                "cnt": 194.780968
              },
              {
                "name": "cycles:u",
                "cnt": 585398302
              },
              {
                "name": "instructions:u",
                "cnt": 934799420
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          934799420
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 583689614
              },
              {
                "name": "faults",
                "cnt": 18742
              },
              {
                "name": "wall-time",
                "cnt": 0.196569796
              },
              {
                "name": "max-rss",
                "cnt": 125928
              },
              {
                "name": "cpu-clock",
                "cnt": 193.720677
              },
              {
                "name": "task-clock",
                "cnt": 193.734551
              },
              {
                "name": "instructions:u",
                "cnt": 930207512
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          930207512
        ]
      ],
      "coercions-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 25080
              },
              {
                "name": "cycles:u",
                "cnt": 3275303885
              },
              {
                "name": "cpu-clock",
                "cnt": 853.923517
              },
              {
                "name": "wall-time",
                "cnt": 0.859719953
              },
              {
                "name": "instructions:u",
                "cnt": 5871707167
              },
              {
                "name": "max-rss",
                "cnt": 144444
              },
              {
                "name": "task-clock",
                "cnt": 853.924069
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5871707167
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 954.804157
              },
              {
                "name": "max-rss",
                "cnt": 151652
              },
              {
                "name": "cpu-clock",
                "cnt": 954.803554
              },
              {
                "name": "instructions:u",
                "cnt": 6932145212
              },
              {
                "name": "cycles:u",
                "cnt": 3669586103
              },
              {
                "name": "faults",
                "cnt": 26802
              },
              {
                "name": "wall-time",
                "cnt": 0.960669605
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          6932145212
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 259.838711
              },
              {
                "name": "cycles:u",
                "cnt": 935627540
              },
              {
                "name": "faults",
                "cnt": 19224
              },
              {
                "name": "wall-time",
                "cnt": 0.265522341
              },
              {
                "name": "cpu-clock",
                "cnt": 259.838022
              },
              {
                "name": "instructions:u",
                "cnt": 1823964115
              },
              {
                "name": "max-rss",
                "cnt": 113688
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1823964115
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 20332
              },
              {
                "name": "task-clock",
                "cnt": 283.192347
              },
              {
                "name": "instructions:u",
                "cnt": 1935185881
              },
              {
                "name": "wall-time",
                "cnt": 0.288888441
              },
              {
                "name": "max-rss",
                "cnt": 133196
              },
              {
                "name": "cycles:u",
                "cnt": 1008759827
              },
              {
                "name": "cpu-clock",
                "cnt": 283.19198
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1935185881
        ],
        [
          "patched incremental: add static arr item-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.966110296
              },
              {
                "name": "cycles:u",
                "cnt": 3686758524
              },
              {
                "name": "faults",
                "cnt": 28233
              },
              {
                "name": "cpu-clock",
                "cnt": 960.770102
              },
              {
                "name": "instructions:u",
                "cnt": 6963818515
              },
              {
                "name": "task-clock",
                "cnt": 960.771149
              },
              {
                "name": "max-rss",
                "cnt": 154908
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add static arr item",
                "path": "1-add-static-arr-item.patch"
              }
            }
          },
          6963818515
        ]
      ],
      "html5ever": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 282440
              },
              {
                "name": "cycles:u",
                "cnt": 13028922493
              },
              {
                "name": "instructions:u",
                "cnt": 19108264323
              },
              {
                "name": "task-clock",
                "cnt": 3415.38877
              },
              {
                "name": "cpu-clock",
                "cnt": 3415.380958
              },
              {
                "name": "faults",
                "cnt": 62565
              },
              {
                "name": "wall-time",
                "cnt": 2.729425386
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          19108264323
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 3944.856377
              },
              {
                "name": "max-rss",
                "cnt": 319828
              },
              {
                "name": "wall-time",
                "cnt": 3.278178852
              },
              {
                "name": "faults",
                "cnt": 75455
              },
              {
                "name": "instructions:u",
                "cnt": 23162552322
              },
              {
                "name": "cycles:u",
                "cnt": 15057677704
              },
              {
                "name": "cpu-clock",
                "cnt": 3944.88766
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          23162552322
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 4065945228
              },
              {
                "name": "wall-time",
                "cnt": 1.122599811
              },
              {
                "name": "faults",
                "cnt": 58281
              },
              {
                "name": "max-rss",
                "cnt": 277992
              },
              {
                "name": "instructions:u",
                "cnt": 6666406721
              },
              {
                "name": "cpu-clock",
                "cnt": 1118.236103
              },
              {
                "name": "task-clock",
                "cnt": 1118.271656
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          6666406721
        ]
      ],
      "clap-rs-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.823166313
              },
              {
                "name": "cycles:u",
                "cnt": 18699815572
              },
              {
                "name": "cpu-clock",
                "cnt": 4816.779033
              },
              {
                "name": "instructions:u",
                "cnt": 26909913300
              },
              {
                "name": "max-rss",
                "cnt": 344576
              },
              {
                "name": "faults",
                "cnt": 113556
              },
              {
                "name": "task-clock",
                "cnt": 4816.765077
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          26909913300
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 36.684843075
              },
              {
                "name": "cycles:u",
                "cnt": 145179167270
              },
              {
                "name": "max-rss",
                "cnt": 499068
              },
              {
                "name": "instructions:u",
                "cnt": 333033224456
              },
              {
                "name": "cpu-clock",
                "cnt": 36678.034594
              },
              {
                "name": "task-clock",
                "cnt": 36678.028757
              },
              {
                "name": "faults",
                "cnt": 257030
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          333033224456
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 47033591829
              },
              {
                "name": "cycles:u",
                "cnt": 28123186772
              },
              {
                "name": "task-clock",
                "cnt": 7241.550813
              },
              {
                "name": "faults",
                "cnt": 150232
              },
              {
                "name": "cpu-clock",
                "cnt": 7241.563734
              },
              {
                "name": "max-rss",
                "cnt": 395236
              },
              {
                "name": "wall-time",
                "cnt": 7.247855209
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          47033591829
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 8276313672
              },
              {
                "name": "max-rss",
                "cnt": 876760
              },
              {
                "name": "faults",
                "cnt": 239621
              },
              {
                "name": "instructions:u",
                "cnt": 13625534367
              },
              {
                "name": "cpu-clock",
                "cnt": 2351.156276
              },
              {
                "name": "task-clock",
                "cnt": 2351.155355
              },
              {
                "name": "wall-time",
                "cnt": 2.328192299
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          13625534367
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 17720939311
              },
              {
                "name": "wall-time",
                "cnt": 3.068049978
              },
              {
                "name": "max-rss",
                "cnt": 883396
              },
              {
                "name": "task-clock",
                "cnt": 3088.995315
              },
              {
                "name": "cpu-clock",
                "cnt": 3088.996394
              },
              {
                "name": "cycles:u",
                "cnt": 11208026955
              },
              {
                "name": "faults",
                "cnt": 240331
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          17720939311
        ]
      ],
      "regex": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 7304.300225
              },
              {
                "name": "max-rss",
                "cnt": 317376
              },
              {
                "name": "wall-time",
                "cnt": 2.524552171
              },
              {
                "name": "instructions:u",
                "cnt": 23941645325
              },
              {
                "name": "cycles:u",
                "cnt": 27074275093
              },
              {
                "name": "cpu-clock",
                "cnt": 7304.309061
              },
              {
                "name": "faults",
                "cnt": 108817
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          23941645325
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 110784
              },
              {
                "name": "cpu-clock",
                "cnt": 7720.132971
              },
              {
                "name": "cycles:u",
                "cnt": 28676565808
              },
              {
                "name": "task-clock",
                "cnt": 7720.112179
              },
              {
                "name": "max-rss",
                "cnt": 324164
              },
              {
                "name": "instructions:u",
                "cnt": 27083332268
              },
              {
                "name": "wall-time",
                "cnt": 2.922198306
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          27083332268
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 128857
              },
              {
                "name": "wall-time",
                "cnt": 3.03332559
              },
              {
                "name": "cpu-clock",
                "cnt": 8473.587896
              },
              {
                "name": "cycles:u",
                "cnt": 31310315254
              },
              {
                "name": "task-clock",
                "cnt": 8473.594205
              },
              {
                "name": "max-rss",
                "cnt": 351916
              },
              {
                "name": "instructions:u",
                "cnt": 27820516629
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          27820516629
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2659041299
              },
              {
                "name": "max-rss",
                "cnt": 270828
              },
              {
                "name": "wall-time",
                "cnt": 0.731107409
              },
              {
                "name": "instructions:u",
                "cnt": 3534850104
              },
              {
                "name": "cpu-clock",
                "cnt": 759.350746
              },
              {
                "name": "faults",
                "cnt": 45805
              },
              {
                "name": "task-clock",
                "cnt": 759.381793
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          3534850104
        ],
        [
          "patched incremental: compile one",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.113078745
              },
              {
                "name": "cpu-clock",
                "cnt": 1660.709003
              },
              {
                "name": "cycles:u",
                "cnt": 6054023209
              },
              {
                "name": "task-clock",
                "cnt": 1660.746291
              },
              {
                "name": "instructions:u",
                "cnt": 7129925392
              },
              {
                "name": "faults",
                "cnt": 56194
              },
              {
                "name": "max-rss",
                "cnt": 297524
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          7129925392
        ],
        [
          "patched incremental: is valid cap letter",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 770.287963
              },
              {
                "name": "cycles:u",
                "cnt": 2704085233
              },
              {
                "name": "faults",
                "cnt": 45784
              },
              {
                "name": "wall-time",
                "cnt": 0.728696376
              },
              {
                "name": "instructions:u",
                "cnt": 3591166025
              },
              {
                "name": "max-rss",
                "cnt": 277168
              },
              {
                "name": "task-clock",
                "cnt": 770.339105
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          3591166025
        ],
        [
          "patched incremental: expand",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 3506363513
              },
              {
                "name": "task-clock",
                "cnt": 983.392339
              },
              {
                "name": "max-rss",
                "cnt": 282772
              },
              {
                "name": "cpu-clock",
                "cnt": 983.345765
              },
              {
                "name": "instructions:u",
                "cnt": 4403157874
              },
              {
                "name": "faults",
                "cnt": 49036
              },
              {
                "name": "wall-time",
                "cnt": 0.852007413
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          4403157874
        ],
        [
          "patched incremental: Compiler new",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 6142244383
              },
              {
                "name": "task-clock",
                "cnt": 1677.697429
              },
              {
                "name": "wall-time",
                "cnt": 1.119166506
              },
              {
                "name": "faults",
                "cnt": 55945
              },
              {
                "name": "instructions:u",
                "cnt": 7150047147
              },
              {
                "name": "cpu-clock",
                "cnt": 1677.642862
              },
              {
                "name": "max-rss",
                "cnt": 295964
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          7150047147
        ],
        [
          "patched incremental: reverse",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 6106904868
              },
              {
                "name": "max-rss",
                "cnt": 298412
              },
              {
                "name": "faults",
                "cnt": 55925
              },
              {
                "name": "wall-time",
                "cnt": 1.116890575
              },
              {
                "name": "instructions:u",
                "cnt": 7146272174
              },
              {
                "name": "cpu-clock",
                "cnt": 1667.047765
              },
              {
                "name": "task-clock",
                "cnt": 1667.100295
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          7146272174
        ],
        [
          "patched incremental: byte frequencies",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 751.325926
              },
              {
                "name": "wall-time",
                "cnt": 0.72099881
              },
              {
                "name": "instructions:u",
                "cnt": 3546731417
              },
              {
                "name": "faults",
                "cnt": 45095
              },
              {
                "name": "cycles:u",
                "cnt": 2640447116
              },
              {
                "name": "task-clock",
                "cnt": 751.369685
              },
              {
                "name": "max-rss",
                "cnt": 267820
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          3546731417
        ],
        [
          "patched incremental: sparse set",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.763928896
              },
              {
                "name": "max-rss",
                "cnt": 344588
              },
              {
                "name": "cycles:u",
                "cnt": 21493619909
              },
              {
                "name": "task-clock",
                "cnt": 5893.765473
              },
              {
                "name": "cpu-clock",
                "cnt": 5893.738071
              },
              {
                "name": "faults",
                "cnt": 118382
              },
              {
                "name": "instructions:u",
                "cnt": 18974274502
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          18974274502
        ],
        [
          "patched incremental: Job",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 5917.02717
              },
              {
                "name": "wall-time",
                "cnt": 1.648622419
              },
              {
                "name": "instructions:u",
                "cnt": 18332543697
              },
              {
                "name": "cycles:u",
                "cnt": 21514333824
              },
              {
                "name": "max-rss",
                "cnt": 336504
              },
              {
                "name": "task-clock",
                "cnt": 5917.055572
              },
              {
                "name": "faults",
                "cnt": 117634
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          18332543697
        ]
      ],
      "regex-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 5169118606
              },
              {
                "name": "cpu-clock",
                "cnt": 1072.404681
              },
              {
                "name": "wall-time",
                "cnt": 1.10239586
              },
              {
                "name": "cycles:u",
                "cnt": 4129934717
              },
              {
                "name": "max-rss",
                "cnt": 181456
              },
              {
                "name": "faults",
                "cnt": 21668
              },
              {
                "name": "task-clock",
                "cnt": 1072.393778
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          5169118606
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1450.119573
              },
              {
                "name": "instructions:u",
                "cnt": 8310010342
              },
              {
                "name": "max-rss",
                "cnt": 187032
              },
              {
                "name": "cpu-clock",
                "cnt": 1450.119728
              },
              {
                "name": "faults",
                "cnt": 23233
              },
              {
                "name": "wall-time",
                "cnt": 1.472010457
              },
              {
                "name": "cycles:u",
                "cnt": 5632411259
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          8310010342
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 32317
              },
              {
                "name": "cycles:u",
                "cnt": 5178523899
              },
              {
                "name": "task-clock",
                "cnt": 1349.965252
              },
              {
                "name": "cpu-clock",
                "cnt": 1349.964635
              },
              {
                "name": "instructions:u",
                "cnt": 6535295844
              },
              {
                "name": "max-rss",
                "cnt": 225248
              },
              {
                "name": "wall-time",
                "cnt": 1.382675249
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          6535295844
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 510.163077
              },
              {
                "name": "task-clock",
                "cnt": 510.162854
              },
              {
                "name": "max-rss",
                "cnt": 211684
              },
              {
                "name": "cycles:u",
                "cnt": 1848708074
              },
              {
                "name": "faults",
                "cnt": 31065
              },
              {
                "name": "wall-time",
                "cnt": 0.500308277
              },
              {
                "name": "instructions:u",
                "cnt": 2613965776
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          2613965776
        ],
        [
          "patched incremental: compile one-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 656.952783
              },
              {
                "name": "faults",
                "cnt": 31890
              },
              {
                "name": "max-rss",
                "cnt": 218080
              },
              {
                "name": "wall-time",
                "cnt": 0.646645248
              },
              {
                "name": "instructions:u",
                "cnt": 3325123094
              },
              {
                "name": "cycles:u",
                "cnt": 2427978997
              },
              {
                "name": "cpu-clock",
                "cnt": 656.951622
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          3325123094
        ],
        [
          "patched incremental: is valid cap letter-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1839592877
              },
              {
                "name": "instructions:u",
                "cnt": 2634376866
              },
              {
                "name": "wall-time",
                "cnt": 0.501726842
              },
              {
                "name": "cpu-clock",
                "cnt": 511.759772
              },
              {
                "name": "faults",
                "cnt": 30664
              },
              {
                "name": "task-clock",
                "cnt": 511.76069
              },
              {
                "name": "max-rss",
                "cnt": 212616
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          2634376866
        ],
        [
          "patched incremental: expand-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.506939337
              },
              {
                "name": "task-clock",
                "cnt": 519.03309
              },
              {
                "name": "instructions:u",
                "cnt": 2671585087
              },
              {
                "name": "max-rss",
                "cnt": 213856
              },
              {
                "name": "cycles:u",
                "cnt": 1879205159
              },
              {
                "name": "cpu-clock",
                "cnt": 519.033434
              },
              {
                "name": "faults",
                "cnt": 30936
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          2671585087
        ],
        [
          "patched incremental: Compiler new-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2449063365
              },
              {
                "name": "max-rss",
                "cnt": 217788
              },
              {
                "name": "cpu-clock",
                "cnt": 663.250571
              },
              {
                "name": "task-clock",
                "cnt": 663.250553
              },
              {
                "name": "instructions:u",
                "cnt": 3345099878
              },
              {
                "name": "wall-time",
                "cnt": 0.651581678
              },
              {
                "name": "faults",
                "cnt": 31897
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          3345099878
        ],
        [
          "patched incremental: reverse-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.653843453
              },
              {
                "name": "task-clock",
                "cnt": 663.819327
              },
              {
                "name": "instructions:u",
                "cnt": 3343282489
              },
              {
                "name": "cycles:u",
                "cnt": 2453620475
              },
              {
                "name": "faults",
                "cnt": 31897
              },
              {
                "name": "cpu-clock",
                "cnt": 663.81923
              },
              {
                "name": "max-rss",
                "cnt": 218180
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          3343282489
        ],
        [
          "patched incremental: byte frequencies-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 212720
              },
              {
                "name": "wall-time",
                "cnt": 0.497233379
              },
              {
                "name": "task-clock",
                "cnt": 507.28635
              },
              {
                "name": "instructions:u",
                "cnt": 2631970089
              },
              {
                "name": "faults",
                "cnt": 30620
              },
              {
                "name": "cycles:u",
                "cnt": 1837003472
              },
              {
                "name": "cpu-clock",
                "cnt": 507.286266
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          2631970089
        ],
        [
          "patched incremental: sparse set-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 605.794325
              },
              {
                "name": "wall-time",
                "cnt": 0.596301883
              },
              {
                "name": "max-rss",
                "cnt": 215652
              },
              {
                "name": "task-clock",
                "cnt": 605.795445
              },
              {
                "name": "faults",
                "cnt": 31270
              },
              {
                "name": "cycles:u",
                "cnt": 2228478882
              },
              {
                "name": "instructions:u",
                "cnt": 3088079796
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          3088079796
        ],
        [
          "patched incremental: Job-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2794680720
              },
              {
                "name": "max-rss",
                "cnt": 213480
              },
              {
                "name": "cycles:u",
                "cnt": 1982288244
              },
              {
                "name": "cpu-clock",
                "cnt": 544.825519
              },
              {
                "name": "faults",
                "cnt": 30706
              },
              {
                "name": "task-clock",
                "cnt": 544.825285
              },
              {
                "name": "wall-time",
                "cnt": 0.534383627
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          2794680720
        ]
      ],
      "encoding-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 497.313274
              },
              {
                "name": "wall-time",
                "cnt": 0.502938737
              },
              {
                "name": "task-clock",
                "cnt": 497.313705
              },
              {
                "name": "max-rss",
                "cnt": 156484
              },
              {
                "name": "cycles:u",
                "cnt": 1874252485
              },
              {
                "name": "faults",
                "cnt": 15212
              },
              {
                "name": "instructions:u",
                "cnt": 2447734565
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          2447734565
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 18196
              },
              {
                "name": "cycles:u",
                "cnt": 3009833741
              },
              {
                "name": "max-rss",
                "cnt": 163980
              },
              {
                "name": "task-clock",
                "cnt": 785.471177
              },
              {
                "name": "instructions:u",
                "cnt": 5075630927
              },
              {
                "name": "cpu-clock",
                "cnt": 785.480614
              },
              {
                "name": "wall-time",
                "cnt": 0.791194827
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          5075630927
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.640641946
              },
              {
                "name": "cycles:u",
                "cnt": 2392363857
              },
              {
                "name": "instructions:u",
                "cnt": 3123149585
              },
              {
                "name": "cpu-clock",
                "cnt": 634.639225
              },
              {
                "name": "max-rss",
                "cnt": 181092
              },
              {
                "name": "task-clock",
                "cnt": 634.63933
              },
              {
                "name": "faults",
                "cnt": 21134
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          3123149585
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 944606319
              },
              {
                "name": "cpu-clock",
                "cnt": 270.988748
              },
              {
                "name": "max-rss",
                "cnt": 175008
              },
              {
                "name": "instructions:u",
                "cnt": 1335515819
              },
              {
                "name": "faults",
                "cnt": 21066
              },
              {
                "name": "task-clock",
                "cnt": 270.988406
              },
              {
                "name": "wall-time",
                "cnt": 0.267898988
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          1335515819
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 20641
              },
              {
                "name": "wall-time",
                "cnt": 0.295798008
              },
              {
                "name": "cycles:u",
                "cnt": 962043488
              },
              {
                "name": "cpu-clock",
                "cnt": 273.725077
              },
              {
                "name": "task-clock",
                "cnt": 273.726396
              },
              {
                "name": "max-rss",
                "cnt": 175460
              },
              {
                "name": "instructions:u",
                "cnt": 1393060658
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1393060658
        ]
      ],
      "inflate": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 22426358993
              },
              {
                "name": "task-clock",
                "cnt": 3665.319815
              },
              {
                "name": "cycles:u",
                "cnt": 13905950276
              },
              {
                "name": "wall-time",
                "cnt": 3.458215518
              },
              {
                "name": "faults",
                "cnt": 158979
              },
              {
                "name": "cpu-clock",
                "cnt": 3665.32371
              },
              {
                "name": "max-rss",
                "cnt": 285840
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          22426358993
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 19.232830904
              },
              {
                "name": "instructions:u",
                "cnt": 173828195084
              },
              {
                "name": "max-rss",
                "cnt": 547264
              },
              {
                "name": "cpu-clock",
                "cnt": 19433.120391
              },
              {
                "name": "cycles:u",
                "cnt": 76327501815
              },
              {
                "name": "task-clock",
                "cnt": 19433.094152
              },
              {
                "name": "faults",
                "cnt": 306911
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          173828195084
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 3965.623644
              },
              {
                "name": "wall-time",
                "cnt": 3.660284136
              },
              {
                "name": "cpu-clock",
                "cnt": 3965.623858
              },
              {
                "name": "cycles:u",
                "cnt": 15044633426
              },
              {
                "name": "instructions:u",
                "cnt": 23944199565
              },
              {
                "name": "max-rss",
                "cnt": 302112
              },
              {
                "name": "faults",
                "cnt": 163583
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          23944199565
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 1348036156
              },
              {
                "name": "instructions:u",
                "cnt": 2047204032
              },
              {
                "name": "task-clock",
                "cnt": 411.183128
              },
              {
                "name": "wall-time",
                "cnt": 0.406924924
              },
              {
                "name": "cpu-clock",
                "cnt": 411.170575
              },
              {
                "name": "faults",
                "cnt": 58955
              },
              {
                "name": "max-rss",
                "cnt": 270844
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          2047204032
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 23714317318
              },
              {
                "name": "wall-time",
                "cnt": 3.585986731
              },
              {
                "name": "faults",
                "cnt": 164766
              },
              {
                "name": "cycles:u",
                "cnt": 14788114976
              },
              {
                "name": "cpu-clock",
                "cnt": 3903.506278
              },
              {
                "name": "max-rss",
                "cnt": 309168
              },
              {
                "name": "task-clock",
                "cnt": 3903.510906
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          23714317318
        ]
      ],
      "regex-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 78544245291
              },
              {
                "name": "cpu-clock",
                "cnt": 25951.587914
              },
              {
                "name": "faults",
                "cnt": 110199
              },
              {
                "name": "max-rss",
                "cnt": 260232
              },
              {
                "name": "cycles:u",
                "cnt": 97701171502
              },
              {
                "name": "wall-time",
                "cnt": 5.520787513
              },
              {
                "name": "task-clock",
                "cnt": 25951.561042
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          78544245291
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 266744
              },
              {
                "name": "task-clock",
                "cnt": 26450.140064
              },
              {
                "name": "wall-time",
                "cnt": 5.948793518
              },
              {
                "name": "cpu-clock",
                "cnt": 26450.165406
              },
              {
                "name": "instructions:u",
                "cnt": 81657989392
              },
              {
                "name": "faults",
                "cnt": 108717
              },
              {
                "name": "cycles:u",
                "cnt": 99612893511
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          81657989392
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 56132558173
              },
              {
                "name": "faults",
                "cnt": 95191
              },
              {
                "name": "wall-time",
                "cnt": 4.196544019
              },
              {
                "name": "cpu-clock",
                "cnt": 18880.121347
              },
              {
                "name": "max-rss",
                "cnt": 336320
              },
              {
                "name": "task-clock",
                "cnt": 18880.088457
              },
              {
                "name": "cycles:u",
                "cnt": 70965111068
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          56132558173
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3467876635
              },
              {
                "name": "cycles:u",
                "cnt": 2632854941
              },
              {
                "name": "max-rss",
                "cnt": 267568
              },
              {
                "name": "cpu-clock",
                "cnt": 736.356781
              },
              {
                "name": "wall-time",
                "cnt": 0.710284344
              },
              {
                "name": "task-clock",
                "cnt": 736.39062
              },
              {
                "name": "faults",
                "cnt": 45784
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3467876635
        ],
        [
          "patched incremental: compile one-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.478775166
              },
              {
                "name": "task-clock",
                "cnt": 2214.058588
              },
              {
                "name": "faults",
                "cnt": 51321
              },
              {
                "name": "cycles:u",
                "cnt": 8355791523
              },
              {
                "name": "cpu-clock",
                "cnt": 2214.04227
              },
              {
                "name": "instructions:u",
                "cnt": 10242131652
              },
              {
                "name": "max-rss",
                "cnt": 286768
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "compile one",
                "path": "0-compile-one.patch"
              }
            }
          },
          10242131652
        ],
        [
          "patched incremental: is valid cap letter-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 274964
              },
              {
                "name": "task-clock",
                "cnt": 775.031538
              },
              {
                "name": "instructions:u",
                "cnt": 3637325031
              },
              {
                "name": "cpu-clock",
                "cnt": 775.013748
              },
              {
                "name": "wall-time",
                "cnt": 0.718814357
              },
              {
                "name": "faults",
                "cnt": 45467
              },
              {
                "name": "cycles:u",
                "cnt": 2775678052
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "is valid cap letter",
                "path": "1-is-valid-cap-letter.patch"
              }
            }
          },
          3637325031
        ],
        [
          "patched incremental: expand-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.723541093
              },
              {
                "name": "max-rss",
                "cnt": 275148
              },
              {
                "name": "task-clock",
                "cnt": 778.337879
              },
              {
                "name": "instructions:u",
                "cnt": 3674696513
              },
              {
                "name": "faults",
                "cnt": 45803
              },
              {
                "name": "cpu-clock",
                "cnt": 778.320408
              },
              {
                "name": "cycles:u",
                "cnt": 2784649096
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 2,
                "name": "expand",
                "path": "2-expand.patch"
              }
            }
          },
          3674696513
        ],
        [
          "patched incremental: Compiler new-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.485384611
              },
              {
                "name": "instructions:u",
                "cnt": 10261920242
              },
              {
                "name": "cycles:u",
                "cnt": 8471260136
              },
              {
                "name": "task-clock",
                "cnt": 2237.947939
              },
              {
                "name": "faults",
                "cnt": 51607
              },
              {
                "name": "cpu-clock",
                "cnt": 2237.912607
              },
              {
                "name": "max-rss",
                "cnt": 288500
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 3,
                "name": "Compiler new",
                "path": "3-Compiler-new.patch"
              }
            }
          },
          10261920242
        ],
        [
          "patched incremental: reverse-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 51695
              },
              {
                "name": "cycles:u",
                "cnt": 8432364116
              },
              {
                "name": "instructions:u",
                "cnt": 10251734906
              },
              {
                "name": "max-rss",
                "cnt": 288180
              },
              {
                "name": "cpu-clock",
                "cnt": 2236.316238
              },
              {
                "name": "task-clock",
                "cnt": 2236.336732
              },
              {
                "name": "wall-time",
                "cnt": 1.486222859
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 4,
                "name": "reverse",
                "path": "4-reverse.patch"
              }
            }
          },
          10251734906
        ],
        [
          "patched incremental: byte frequencies-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 2598533472
              },
              {
                "name": "instructions:u",
                "cnt": 3483209490
              },
              {
                "name": "wall-time",
                "cnt": 0.703541977
              },
              {
                "name": "task-clock",
                "cnt": 729.231902
              },
              {
                "name": "faults",
                "cnt": 44719
              },
              {
                "name": "max-rss",
                "cnt": 264344
              },
              {
                "name": "cpu-clock",
                "cnt": 729.209225
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 5,
                "name": "byte frequencies",
                "path": "5-byte-frequencies.patch"
              }
            }
          },
          3483209490
        ],
        [
          "patched incremental: sparse set-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 41360578666
              },
              {
                "name": "max-rss",
                "cnt": 325864
              },
              {
                "name": "wall-time",
                "cnt": 2.727178804
              },
              {
                "name": "faults",
                "cnt": 84888
              },
              {
                "name": "cpu-clock",
                "cnt": 11032.188332
              },
              {
                "name": "instructions:u",
                "cnt": 37083207650
              },
              {
                "name": "task-clock",
                "cnt": 11032.167347
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 6,
                "name": "sparse set",
                "path": "6-sparse-set.patch"
              }
            }
          },
          37083207650
        ],
        [
          "patched incremental: Job-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 2.632403895
              },
              {
                "name": "cpu-clock",
                "cnt": 10910.19196
              },
              {
                "name": "task-clock",
                "cnt": 10910.179567
              },
              {
                "name": "max-rss",
                "cnt": 321824
              },
              {
                "name": "cycles:u",
                "cnt": 40895125589
              },
              {
                "name": "instructions:u",
                "cnt": 36464210798
              },
              {
                "name": "faults",
                "cnt": 84326
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 7,
                "name": "Job",
                "path": "7-Job.patch"
              }
            }
          },
          36464210798
        ]
      ],
      "inflate-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 13.285281983
              },
              {
                "name": "task-clock",
                "cnt": 13566.806682
              },
              {
                "name": "cycles:u",
                "cnt": 52485617632
              },
              {
                "name": "faults",
                "cnt": 382383
              },
              {
                "name": "cpu-clock",
                "cnt": 13566.794982
              },
              {
                "name": "max-rss",
                "cnt": 285668
              },
              {
                "name": "instructions:u",
                "cnt": 81003544088
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          81003544088
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 22842.700149
              },
              {
                "name": "wall-time",
                "cnt": 22.556554166
              },
              {
                "name": "max-rss",
                "cnt": 434624
              },
              {
                "name": "cycles:u",
                "cnt": 88565561603
              },
              {
                "name": "faults",
                "cnt": 703246
              },
              {
                "name": "task-clock",
                "cnt": 22842.687379
              },
              {
                "name": "instructions:u",
                "cnt": 172360792900
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          172360792900
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 46120938002
              },
              {
                "name": "max-rss",
                "cnt": 302104
              },
              {
                "name": "wall-time",
                "cnt": 11.682160275
              },
              {
                "name": "instructions:u",
                "cnt": 72599403696
              },
              {
                "name": "cpu-clock",
                "cnt": 11945.090179
              },
              {
                "name": "task-clock",
                "cnt": 11945.079884
              },
              {
                "name": "faults",
                "cnt": 360361
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          72599403696
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 405.888111
              },
              {
                "name": "max-rss",
                "cnt": 269712
              },
              {
                "name": "task-clock",
                "cnt": 405.889367
              },
              {
                "name": "cycles:u",
                "cnt": 1320225726
              },
              {
                "name": "faults",
                "cnt": 57820
              },
              {
                "name": "instructions:u",
                "cnt": 2014610602
              },
              {
                "name": "wall-time",
                "cnt": 0.402043013
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          2014610602
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 12557.910204
              },
              {
                "name": "faults",
                "cnt": 374036
              },
              {
                "name": "task-clock",
                "cnt": 12557.901817
              },
              {
                "name": "wall-time",
                "cnt": 12.291364189
              },
              {
                "name": "max-rss",
                "cnt": 309068
              },
              {
                "name": "instructions:u",
                "cnt": 74080858653
              },
              {
                "name": "cycles:u",
                "cnt": 47971246080
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          74080858653
        ]
      ],
      "deeply-nested-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.223954738
              },
              {
                "name": "task-clock",
                "cnt": 272.508901
              },
              {
                "name": "max-rss",
                "cnt": 132376
              },
              {
                "name": "cycles:u",
                "cnt": 995947632
              },
              {
                "name": "faults",
                "cnt": 8571
              },
              {
                "name": "instructions:u",
                "cnt": 1407174639
              },
              {
                "name": "cpu-clock",
                "cnt": 272.505402
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          1407174639
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 8584
              },
              {
                "name": "max-rss",
                "cnt": 132392
              },
              {
                "name": "task-clock",
                "cnt": 271.389552
              },
              {
                "name": "wall-time",
                "cnt": 0.222609075
              },
              {
                "name": "cpu-clock",
                "cnt": 271.397329
              },
              {
                "name": "cycles:u",
                "cnt": 994625143
              },
              {
                "name": "instructions:u",
                "cnt": 1409897058
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          1409897058
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 248.526921
              },
              {
                "name": "wall-time",
                "cnt": 0.217477149
              },
              {
                "name": "max-rss",
                "cnt": 132500
              },
              {
                "name": "task-clock",
                "cnt": 248.530028
              },
              {
                "name": "instructions:u",
                "cnt": 1252536191
              },
              {
                "name": "cycles:u",
                "cnt": 901998700
              },
              {
                "name": "faults",
                "cnt": 9794
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          1252536191
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.081885984
              },
              {
                "name": "cycles:u",
                "cnt": 237801021
              },
              {
                "name": "task-clock",
                "cnt": 77.843595
              },
              {
                "name": "cpu-clock",
                "cnt": 77.839989
              },
              {
                "name": "faults",
                "cnt": 8249
              },
              {
                "name": "max-rss",
                "cnt": 124088
              },
              {
                "name": "instructions:u",
                "cnt": 355698093
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          355698093
        ]
      ],
      "clap-rs": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 11.162090334
              },
              {
                "name": "max-rss",
                "cnt": 560096
              },
              {
                "name": "cpu-clock",
                "cnt": 17874.659587
              },
              {
                "name": "faults",
                "cnt": 322940
              },
              {
                "name": "task-clock",
                "cnt": 17874.652052
              },
              {
                "name": "instructions:u",
                "cnt": 81816809491
              },
              {
                "name": "cycles:u",
                "cnt": 67980319955
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          81816809491
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 52207.120109
              },
              {
                "name": "wall-time",
                "cnt": 45.42370164
              },
              {
                "name": "instructions:u",
                "cnt": 388057178920
              },
              {
                "name": "max-rss",
                "cnt": 569796
              },
              {
                "name": "cycles:u",
                "cnt": 204466309714
              },
              {
                "name": "faults",
                "cnt": 463700
              },
              {
                "name": "task-clock",
                "cnt": 52207.075832
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          388057178920
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 88169112529
              },
              {
                "name": "faults",
                "cnt": 375974
              },
              {
                "name": "instructions:u",
                "cnt": 106891229548
              },
              {
                "name": "wall-time",
                "cnt": 13.663998326
              },
              {
                "name": "cpu-clock",
                "cnt": 23243.628589
              },
              {
                "name": "max-rss",
                "cnt": 694792
              },
              {
                "name": "task-clock",
                "cnt": 23243.610368
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          106891229548
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 3.101691737
              },
              {
                "name": "cpu-clock",
                "cnt": 3162.604929
              },
              {
                "name": "instructions:u",
                "cnt": 17175034794
              },
              {
                "name": "max-rss",
                "cnt": 993764
              },
              {
                "name": "cycles:u",
                "cnt": 11173094268
              },
              {
                "name": "task-clock",
                "cnt": 3162.658074
              },
              {
                "name": "faults",
                "cnt": 281419
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          17175034794
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 8.519810791
              },
              {
                "name": "max-rss",
                "cnt": 1177344
              },
              {
                "name": "cpu-clock",
                "cnt": 12687.691409
              },
              {
                "name": "instructions:u",
                "cnt": 56146603549
              },
              {
                "name": "cycles:u",
                "cnt": 47456814041
              },
              {
                "name": "faults",
                "cnt": 411313
              },
              {
                "name": "task-clock",
                "cnt": 12687.697597
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          56146603549
        ]
      ],
      "unify-linearly-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 104864
              },
              {
                "name": "cpu-clock",
                "cnt": 75.810946
              },
              {
                "name": "cycles:u",
                "cnt": 245356966
              },
              {
                "name": "faults",
                "cnt": 6222
              },
              {
                "name": "instructions:u",
                "cnt": 369329932
              },
              {
                "name": "wall-time",
                "cnt": 0.082141218
              },
              {
                "name": "task-clock",
                "cnt": 75.811275
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          369329932
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 252492423
              },
              {
                "name": "cpu-clock",
                "cnt": 77.497219
              },
              {
                "name": "instructions:u",
                "cnt": 382332556
              },
              {
                "name": "wall-time",
                "cnt": 0.083598884
              },
              {
                "name": "max-rss",
                "cnt": 105016
              },
              {
                "name": "faults",
                "cnt": 6249
              },
              {
                "name": "task-clock",
                "cnt": 77.497812
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          382332556
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 7489
              },
              {
                "name": "wall-time",
                "cnt": 0.092025555
              },
              {
                "name": "cycles:u",
                "cnt": 281565427
              },
              {
                "name": "task-clock",
                "cnt": 86.137288
              },
              {
                "name": "instructions:u",
                "cnt": 416347478
              },
              {
                "name": "max-rss",
                "cnt": 111452
              },
              {
                "name": "cpu-clock",
                "cnt": 86.136801
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          416347478
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 172712965
              },
              {
                "name": "instructions:u",
                "cnt": 259277875
              },
              {
                "name": "wall-time",
                "cnt": 0.06283966
              },
              {
                "name": "cpu-clock",
                "cnt": 57.495421
              },
              {
                "name": "max-rss",
                "cnt": 96324
              },
              {
                "name": "task-clock",
                "cnt": 57.497481
              },
              {
                "name": "faults",
                "cnt": 6628
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          259277875
        ],
        [
          "patched incremental: dummy fn-check",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 192889198
              },
              {
                "name": "wall-time",
                "cnt": 0.069362895
              },
              {
                "name": "task-clock",
                "cnt": 63.926531
              },
              {
                "name": "instructions:u",
                "cnt": 286331149
              },
              {
                "name": "cpu-clock",
                "cnt": 63.925379
              },
              {
                "name": "max-rss",
                "cnt": 109668
              },
              {
                "name": "faults",
                "cnt": 7224
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          286331149
        ]
      ],
      "unused-warnings-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 37613
              },
              {
                "name": "max-rss",
                "cnt": 152828
              },
              {
                "name": "cpu-clock",
                "cnt": 496.932025
              },
              {
                "name": "task-clock",
                "cnt": 496.935046
              },
              {
                "name": "wall-time",
                "cnt": 0.48445971
              },
              {
                "name": "instructions:u",
                "cnt": 2589238259
              },
              {
                "name": "cycles:u",
                "cnt": 1702621788
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          2589238259
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.482882313
              },
              {
                "name": "cycles:u",
                "cnt": 1700493832
              },
              {
                "name": "cpu-clock",
                "cnt": 495.700765
              },
              {
                "name": "instructions:u",
                "cnt": 2589473408
              },
              {
                "name": "faults",
                "cnt": 37398
              },
              {
                "name": "max-rss",
                "cnt": 151788
              },
              {
                "name": "task-clock",
                "cnt": 495.684489
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          2589473408
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 60204
              },
              {
                "name": "task-clock",
                "cnt": 709.895995
              },
              {
                "name": "cpu-clock",
                "cnt": 709.895945
              },
              {
                "name": "wall-time",
                "cnt": 0.702866541
              },
              {
                "name": "max-rss",
                "cnt": 230204
              },
              {
                "name": "cycles:u",
                "cnt": 2452577327
              },
              {
                "name": "instructions:u",
                "cnt": 3553861403
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          3553861403
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 700.290049
              },
              {
                "name": "instructions:u",
                "cnt": 3284466289
              },
              {
                "name": "max-rss",
                "cnt": 225464
              },
              {
                "name": "task-clock",
                "cnt": 700.290377
              },
              {
                "name": "faults",
                "cnt": 63656
              },
              {
                "name": "wall-time",
                "cnt": 0.675333463
              },
              {
                "name": "cycles:u",
                "cnt": 2398729247
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          3284466289
        ],
        [
          "patched incremental: dummy fn-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3332779547
              },
              {
                "name": "faults",
                "cnt": 63230
              },
              {
                "name": "wall-time",
                "cnt": 0.673593392
              },
              {
                "name": "cpu-clock",
                "cnt": 709.77814
              },
              {
                "name": "max-rss",
                "cnt": 242372
              },
              {
                "name": "task-clock",
                "cnt": 709.779917
              },
              {
                "name": "cycles:u",
                "cnt": 2418557492
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "dummy fn",
                "path": "0-dummy-fn.patch"
              }
            }
          },
          3332779547
        ]
      ],
      "piston-image-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 10007894339
              },
              {
                "name": "max-rss",
                "cnt": 217216
              },
              {
                "name": "faults",
                "cnt": 31416
              },
              {
                "name": "cpu-clock",
                "cnt": 2027.298488
              },
              {
                "name": "cycles:u",
                "cnt": 7885522755
              },
              {
                "name": "wall-time",
                "cnt": 2.057552177
              },
              {
                "name": "task-clock",
                "cnt": 2027.298886
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          10007894339
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 2683.370571
              },
              {
                "name": "max-rss",
                "cnt": 225228
              },
              {
                "name": "instructions:u",
                "cnt": 15685987648
              },
              {
                "name": "cycles:u",
                "cnt": 10475776808
              },
              {
                "name": "faults",
                "cnt": 33637
              },
              {
                "name": "wall-time",
                "cnt": 2.689401131
              },
              {
                "name": "task-clock",
                "cnt": 2683.369425
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          15685987648
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2492.934064
              },
              {
                "name": "cycles:u",
                "cnt": 9657801894
              },
              {
                "name": "cpu-clock",
                "cnt": 2492.934974
              },
              {
                "name": "max-rss",
                "cnt": 289820
              },
              {
                "name": "wall-time",
                "cnt": 2.499116154
              },
              {
                "name": "instructions:u",
                "cnt": 12381286141
              },
              {
                "name": "faults",
                "cnt": 49507
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          12381286141
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3375809576
              },
              {
                "name": "task-clock",
                "cnt": 718.921866
              },
              {
                "name": "wall-time",
                "cnt": 0.70032476
              },
              {
                "name": "max-rss",
                "cnt": 267984
              },
              {
                "name": "cycles:u",
                "cnt": 2606231544
              },
              {
                "name": "cpu-clock",
                "cnt": 718.921403
              },
              {
                "name": "faults",
                "cnt": 46013
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          3375809576
        ]
      ],
      "deep-vector-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 14508527128
              },
              {
                "name": "task-clock",
                "cnt": 3988.20753
              },
              {
                "name": "cpu-clock",
                "cnt": 3988.201111
              },
              {
                "name": "instructions:u",
                "cnt": 21294926115
              },
              {
                "name": "wall-time",
                "cnt": 3.928563121
              },
              {
                "name": "max-rss",
                "cnt": 433900
              },
              {
                "name": "faults",
                "cnt": 311147
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          21294926115
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 14779592688
              },
              {
                "name": "task-clock",
                "cnt": 4042.645965
              },
              {
                "name": "max-rss",
                "cnt": 432736
              },
              {
                "name": "faults",
                "cnt": 318827
              },
              {
                "name": "wall-time",
                "cnt": 3.977574924
              },
              {
                "name": "instructions:u",
                "cnt": 21607621429
              },
              {
                "name": "cpu-clock",
                "cnt": 4042.641203
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          21607621429
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 4.052563813
              },
              {
                "name": "cycles:u",
                "cnt": 15064428098
              },
              {
                "name": "task-clock",
                "cnt": 4110.504796
              },
              {
                "name": "max-rss",
                "cnt": 441032
              },
              {
                "name": "instructions:u",
                "cnt": 22922233729
              },
              {
                "name": "faults",
                "cnt": 315780
              },
              {
                "name": "cpu-clock",
                "cnt": 4110.515093
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          22922233729
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 845.930739
              },
              {
                "name": "cycles:u",
                "cnt": 2914880987
              },
              {
                "name": "faults",
                "cnt": 89199
              },
              {
                "name": "wall-time",
                "cnt": 0.84655783
              },
              {
                "name": "instructions:u",
                "cnt": 5097563012
              },
              {
                "name": "max-rss",
                "cnt": 230904
              },
              {
                "name": "task-clock",
                "cnt": 845.941226
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          5097563012
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 438456
              },
              {
                "name": "cycles:u",
                "cnt": 15077261126
              },
              {
                "name": "task-clock",
                "cnt": 4115.112717
              },
              {
                "name": "faults",
                "cnt": 319420
              },
              {
                "name": "instructions:u",
                "cnt": 23178290990
              },
              {
                "name": "wall-time",
                "cnt": 4.075056558
              },
              {
                "name": "cpu-clock",
                "cnt": 4115.102295
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          23178290990
        ],
        [
          "patched incremental: add vec item-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 15076665274
              },
              {
                "name": "max-rss",
                "cnt": 438236
              },
              {
                "name": "task-clock",
                "cnt": 4130.050472
              },
              {
                "name": "faults",
                "cnt": 317669
              },
              {
                "name": "cpu-clock",
                "cnt": 4130.050538
              },
              {
                "name": "instructions:u",
                "cnt": 23129414328
              },
              {
                "name": "wall-time",
                "cnt": 4.064394959
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "add vec item",
                "path": "1-add-vec-item.patch"
              }
            }
          },
          23129414328
        ]
      ],
      "syn-opt": [
        [
          "clean-opt",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 67609
              },
              {
                "name": "instructions:u",
                "cnt": 51996072232
              },
              {
                "name": "max-rss",
                "cnt": 250352
              },
              {
                "name": "cycles:u",
                "cnt": 64881278223
              },
              {
                "name": "task-clock",
                "cnt": 17242.261047
              },
              {
                "name": "cpu-clock",
                "cnt": 17242.301087
              },
              {
                "name": "wall-time",
                "cnt": 3.506942299
              }
            ],
            "check": false,
            "release": true,
            "state": "Clean"
          },
          51996072232
        ],
        [
          "nll-opt",
          {
            "stats": [
              {
                "name": "cycles:u",
                "cnt": 68963175551
              },
              {
                "name": "max-rss",
                "cnt": 252748
              },
              {
                "name": "task-clock",
                "cnt": 18296.175135
              },
              {
                "name": "faults",
                "cnt": 71147
              },
              {
                "name": "cpu-clock",
                "cnt": 18296.204059
              },
              {
                "name": "wall-time",
                "cnt": 4.149211828
              },
              {
                "name": "instructions:u",
                "cnt": 57821997710
              }
            ],
            "check": false,
            "release": true,
            "state": "Nll"
          },
          57821997710
        ],
        [
          "baseline incremental-opt",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 11107.078622
              },
              {
                "name": "instructions:u",
                "cnt": 34198483843
              },
              {
                "name": "wall-time",
                "cnt": 2.754437792
              },
              {
                "name": "faults",
                "cnt": 65275
              },
              {
                "name": "cycles:u",
                "cnt": 41748534737
              },
              {
                "name": "max-rss",
                "cnt": 285920
              },
              {
                "name": "cpu-clock",
                "cnt": 11107.095659
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalStart"
          },
          34198483843
        ],
        [
          "clean incremental-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 2994603218
              },
              {
                "name": "faults",
                "cnt": 41486
              },
              {
                "name": "max-rss",
                "cnt": 254220
              },
              {
                "name": "task-clock",
                "cnt": 639.393869
              },
              {
                "name": "cycles:u",
                "cnt": 2282422085
              },
              {
                "name": "cpu-clock",
                "cnt": 639.377419
              },
              {
                "name": "wall-time",
                "cnt": 0.623469143
              }
            ],
            "check": false,
            "release": true,
            "state": "IncrementalClean"
          },
          2994603218
        ],
        [
          "patched incremental: println-opt",
          {
            "stats": [
              {
                "name": "instructions:u",
                "cnt": 3584772418
              },
              {
                "name": "wall-time",
                "cnt": 0.682105246
              },
              {
                "name": "faults",
                "cnt": 42931
              },
              {
                "name": "max-rss",
                "cnt": 267204
              },
              {
                "name": "cycles:u",
                "cnt": 2817262988
              },
              {
                "name": "cpu-clock",
                "cnt": 786.646276
              },
              {
                "name": "task-clock",
                "cnt": 786.661482
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          3584772418
        ],
        [
          "patched incremental: nll-opt",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 11528.179504
              },
              {
                "name": "wall-time",
                "cnt": 3.159461889
              },
              {
                "name": "instructions:u",
                "cnt": 38070200085
              },
              {
                "name": "task-clock",
                "cnt": 11528.158886
              },
              {
                "name": "max-rss",
                "cnt": 306908
              },
              {
                "name": "cycles:u",
                "cnt": 43408174157
              },
              {
                "name": "faults",
                "cnt": 70396
              }
            ],
            "check": false,
            "release": true,
            "state": {
              "IncrementalPatched": {
                "index": 1,
                "name": "nll",
                "path": "1-nll.patch"
              }
            }
          },
          38070200085
        ]
      ],
      "regression-31157-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "faults",
                "cnt": 10114
              },
              {
                "name": "wall-time",
                "cnt": 0.233782604
              },
              {
                "name": "cycles:u",
                "cnt": 815248851
              },
              {
                "name": "max-rss",
                "cnt": 135724
              },
              {
                "name": "task-clock",
                "cnt": 226.201011
              },
              {
                "name": "cpu-clock",
                "cnt": 226.200154
              },
              {
                "name": "instructions:u",
                "cnt": 1130130066
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          1130130066
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 137416
              },
              {
                "name": "task-clock",
                "cnt": 305.216078
              },
              {
                "name": "cpu-clock",
                "cnt": 305.21543
              },
              {
                "name": "cycles:u",
                "cnt": 1132486951
              },
              {
                "name": "instructions:u",
                "cnt": 1772958831
              },
              {
                "name": "faults",
                "cnt": 10701
              },
              {
                "name": "wall-time",
                "cnt": 0.310961482
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          1772958831
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 283.486831
              },
              {
                "name": "instructions:u",
                "cnt": 1422215571
              },
              {
                "name": "wall-time",
                "cnt": 0.289397248
              },
              {
                "name": "cycles:u",
                "cnt": 1032745095
              },
              {
                "name": "faults",
                "cnt": 13359
              },
              {
                "name": "task-clock",
                "cnt": 283.48754
              },
              {
                "name": "max-rss",
                "cnt": 149720
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          1422215571
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 127.017822
              },
              {
                "name": "instructions:u",
                "cnt": 604288842
              },
              {
                "name": "max-rss",
                "cnt": 145080
              },
              {
                "name": "task-clock",
                "cnt": 127.019063
              },
              {
                "name": "cycles:u",
                "cnt": 409134467
              },
              {
                "name": "faults",
                "cnt": 13198
              },
              {
                "name": "wall-time",
                "cnt": 0.129674
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          604288842
        ],
        [
          "patched incremental: println-check",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 0.145403867
              },
              {
                "name": "max-rss",
                "cnt": 148776
              },
              {
                "name": "cpu-clock",
                "cnt": 142.509667
              },
              {
                "name": "task-clock",
                "cnt": 142.510669
              },
              {
                "name": "faults",
                "cnt": 13237
              },
              {
                "name": "instructions:u",
                "cnt": 661018491
              },
              {
                "name": "cycles:u",
                "cnt": 468962496
              }
            ],
            "check": true,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          661018491
        ]
      ],
      "regression-31157": [
        [
          "clean",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 1964.54752
              },
              {
                "name": "wall-time",
                "cnt": 0.932376341
              },
              {
                "name": "cycles:u",
                "cnt": 7317188364
              },
              {
                "name": "faults",
                "cnt": 30580
              },
              {
                "name": "task-clock",
                "cnt": 1964.55462
              },
              {
                "name": "instructions:u",
                "cnt": 7649753437
              },
              {
                "name": "max-rss",
                "cnt": 189500
              }
            ],
            "check": false,
            "release": false,
            "state": "Clean"
          },
          7649753437
        ],
        [
          "nll",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 2102.006029
              },
              {
                "name": "cycles:u",
                "cnt": 7840761687
              },
              {
                "name": "faults",
                "cnt": 30906
              },
              {
                "name": "wall-time",
                "cnt": 1.006468069
              },
              {
                "name": "instructions:u",
                "cnt": 8277297659
              },
              {
                "name": "cpu-clock",
                "cnt": 2101.996134
              },
              {
                "name": "max-rss",
                "cnt": 192780
              }
            ],
            "check": false,
            "release": false,
            "state": "Nll"
          },
          8277297659
        ],
        [
          "baseline incremental",
          {
            "stats": [
              {
                "name": "wall-time",
                "cnt": 1.108323406
              },
              {
                "name": "faults",
                "cnt": 39031
              },
              {
                "name": "task-clock",
                "cnt": 2180.366158
              },
              {
                "name": "cpu-clock",
                "cnt": 2180.360606
              },
              {
                "name": "cycles:u",
                "cnt": 8091803897
              },
              {
                "name": "instructions:u",
                "cnt": 8662937009
              },
              {
                "name": "max-rss",
                "cnt": 204024
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalStart"
          },
          8662937009
        ],
        [
          "clean incremental",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 177156
              },
              {
                "name": "wall-time",
                "cnt": 0.268530335
              },
              {
                "name": "instructions:u",
                "cnt": 1195297849
              },
              {
                "name": "cycles:u",
                "cnt": 929167805
              },
              {
                "name": "faults",
                "cnt": 20213
              },
              {
                "name": "cpu-clock",
                "cnt": 275.685519
              },
              {
                "name": "task-clock",
                "cnt": 275.687314
              }
            ],
            "check": false,
            "release": false,
            "state": "IncrementalClean"
          },
          1195297849
        ],
        [
          "patched incremental: println",
          {
            "stats": [
              {
                "name": "cpu-clock",
                "cnt": 312.192765
              },
              {
                "name": "max-rss",
                "cnt": 187700
              },
              {
                "name": "instructions:u",
                "cnt": 1370176731
              },
              {
                "name": "wall-time",
                "cnt": 0.28648514
              },
              {
                "name": "task-clock",
                "cnt": 312.199775
              },
              {
                "name": "faults",
                "cnt": 20953
              },
              {
                "name": "cycles:u",
                "cnt": 1059526624
              }
            ],
            "check": false,
            "release": false,
            "state": {
              "IncrementalPatched": {
                "index": 0,
                "name": "println",
                "path": "0-println.patch"
              }
            }
          },
          1370176731
        ]
      ],
      "serde-check": [
        [
          "clean-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 5908.026812
              },
              {
                "name": "faults",
                "cnt": 49041
              },
              {
                "name": "max-rss",
                "cnt": 266920
              },
              {
                "name": "cycles:u",
                "cnt": 23274787705
              },
              {
                "name": "cpu-clock",
                "cnt": 5908.028089
              },
              {
                "name": "wall-time",
                "cnt": 5.914137238
              },
              {
                "name": "instructions:u",
                "cnt": 35580404263
              }
            ],
            "check": true,
            "release": false,
            "state": "Clean"
          },
          35580404263
        ],
        [
          "nll-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 11313.826771
              },
              {
                "name": "max-rss",
                "cnt": 278464
              },
              {
                "name": "cycles:u",
                "cnt": 44828651461
              },
              {
                "name": "cpu-clock",
                "cnt": 11313.839703
              },
              {
                "name": "instructions:u",
                "cnt": 84539885214
              },
              {
                "name": "faults",
                "cnt": 51912
              },
              {
                "name": "wall-time",
                "cnt": 11.320276517
              }
            ],
            "check": true,
            "release": false,
            "state": "Nll"
          },
          84539885214
        ],
        [
          "baseline incremental-check",
          {
            "stats": [
              {
                "name": "max-rss",
                "cnt": 354936
              },
              {
                "name": "cycles:u",
                "cnt": 26376843450
              },
              {
                "name": "wall-time",
                "cnt": 6.723915361
              },
              {
                "name": "cpu-clock",
                "cnt": 6717.857374
              },
              {
                "name": "instructions:u",
                "cnt": 39901528101
              },
              {
                "name": "task-clock",
                "cnt": 6717.855333
              },
              {
                "name": "faults",
                "cnt": 71967
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalStart"
          },
          39901528101
        ],
        [
          "clean incremental-check",
          {
            "stats": [
              {
                "name": "task-clock",
                "cnt": 1484.508297
              },
              {
                "name": "cycles:u",
                "cnt": 5558706407
              },
              {
                "name": "max-rss",
                "cnt": 338356
              },
              {
                "name": "instructions:u",
                "cnt": 7108825832
              },
              {
                "name": "cpu-clock",
                "cnt": 1484.52038
              },
              {
                "name": "wall-time",
                "cnt": 1.458668171
              },
              {
                "name": "faults",
                "cnt": 69892
              }
            ],
            "check": true,
            "release": false,
            "state": "IncrementalClean"
          },
          7108825832
        ]
      ]
    }
  }
};