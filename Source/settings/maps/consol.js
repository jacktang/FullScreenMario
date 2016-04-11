FullScreenMario.FullScreenMario.settings.maps.library["consol"] = {
    "name": "consol",
    "locations": [
        {"entry": "Plain"},
    ],
    "areas": [
        {
            "setting": "Overworld",
            "blockBoundaries": true,
            "creation": [
                {"macro": "Pattern", "pattern": "BackRegular", "repeat": 5},
                {"macro": "Floor", "width": 552},
                {
                    "thing": "CustomText", "x": 20, "y": 60, "texts": [
                    {"text": "HELLO SUPER CONSOLI"}
                ]
                },
                {
                    "thing": "CustomText", "x": 20, "y": 36, "texts": [
                    {"text": "MOVE: ARROWS/WASD", "offset": 12},
                    {"text": "FIRE/SPRINT: SHIFT/CTRL"},
                    {"text": "PAUSE: P/RIGHTCLICK", "offset": 8}
                ]
                },
                {"thing": "Block", "x": 128, "y": 32},
                {"thing": "Brick", "x": 160, "y": 32},
                {"thing": "Block", "x": 168, "y": 32, "contents": "Mushroom"},
                {"thing": "Goomba", "x": 176, "y": 8},
                {"thing": "Brick", "x": 176, "y": 32},
                {"thing": "Block", "x": 176, "y": 64},
                {"thing": "Block", "x": 184, "y": 32},
                {"thing": "Brick", "x": 192, "y": 32},
                {
                    "thing": "CustomText", "x": 210, "y": 65, "texts": [
                    {"text": "CHOOSE YOUR LANGUAGE:"}
                ]
                },
                {"macro": "Pipe", "x": 224, "height": 20},
                {"thing": "CheepCheep", "x": 240, "y": 8},
                {"thing": "CheepCheep", "x": 245, "y": 8},
                // {
                //     "thing": "CustomText", "x": 400, "y": 65, "texts": [
                //     {"text": "JAVASCRIPT!"}
                // ]
                // },
                // {
                //     "thing": "CustomText", "x": 295, "y": 60, "texts": [
                //     {"text": "JAVASCRIPT"}
                // ]
                // },
                {"macro": "Pipe", "x": 304, "height": 24},
                {"thing": "Goomba", "x": 340, "y": 8},
                // {
                //     "thing": "CustomText", "x": 360, "y": 60, "texts": [
                //     {"text": "GO"}
                // ]
                // },
                {"macro": "Pipe", "x": 368, "height": 32},
                {"thing": "Goomba", "x": 412, "y": 8},
                {"thing": "Goomba", "x": 422, "y": 8},
                {"macro": "Pipe", "x": 456, "height": 32},
                {"thing": "Block", "x": 512, "y": 40, "contents": "Mushroom1Up", "hidden": true},
                {"macro": "Floor", "x": 568, "width": 120},
                {"thing": "Brick", "x": 616, "y": 32},
                {"thing": "Block", "x": 624, "y": 32, "contents": "Mushroom"},
                {"thing": "Brick", "x": 632, "y": 32},
                {"thing": "Brick", "x": 640, "y": 32},
                {"thing": "Goomba", "x": 640, "y": 72},
                {"thing": "Brick", "x": 648, "y": 64},
                {"thing": "Brick", "x": 656, "y": 64},
                {"thing": "Goomba", "x": 656, "y": 72},
                {"macro": "Fill", "thing": "Brick", "x": 664, "y": 64, "xnum": 5, "xwidth": 8},
                {"macro": "Floor", "x": 712, "width": 200},
                {"macro": "Fill", "thing": "Brick", "x": 728, "y": 64, "xnum": 3, "xwidth": 8},
                {"thing": "Brick", "x": 752, "y": 32, "contents": "Coin"},
                {"thing": "Block", "x": 752, "y": 64},
                {"thing": "Goomba", "x": 776, "y": 8},
                {"thing": "Goomba", "x": 788, "y": 8},
                {"thing": "Brick", "x": 800, "y": 32},
                {"thing": "Brick", "x": 808, "y": 32, "contents": "Star"},
                {"macro": "EndOutsideCastle", "x": 820, "y": 0, "transport": {"map": "1-2"}}
            ]
        }
    ]
};