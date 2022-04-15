function boop(TempChar) {
    let LockChar = Player.MemberNumber;

    CharacterNaked(TempChar);
    RTColour = (
        Array.isArray(InventoryGet(TempChar, "HairFront").Color) ?
        InventoryGet(TempChar, "HairFront").Color[0] :
        InventoryGet(TempChar, "HairFront").Color);

    CharacterSetActivePose(TempChar, "Kneel", true);

    InventoryWear(TempChar, 'FuturisticAnkleCuffs', 'ItemFeet', RTColour);
    InventoryGet(TempChar, 'ItemFeet').Property = {
        "Type": "Closed",
        "Effect": [
            "Prone",
            "Freeze",
            "Lock"
        ],
        "SetPose": [
            "LegsClosed"
        ],
        "Difficulty": 6,
        "FreezeActivePose": [
            "BodyLower"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'FuturisticLegCuffs', 'ItemLegs', RTColour);
    InventoryGet(TempChar, 'ItemLegs').Property = {
        "Type": "Closed",
        "SetPose": [
            "LegsClosed"
        ],
        "Effect": [
            "Prone",
            "KneelFreeze",
            "Slow",
            "Lock"
        ],
        "FreezeActivePose": [
            "BodyLower"
        ],
        "Difficulty": 6,
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'ClitoralStimulator', 'ItemVulva');
    InventoryGet(TempChar, 'ItemVulva').Property = {
        "Mode": "Edge",
        "Intensity": 1,
        "Effect": [
            "Egged",
            "Vibrating",
            "Edged"
        ]
    }

    InventoryWear(TempChar, 'TapedClitEgg', 'ItemVulvaPiercings');
    InventoryGet(TempChar, 'ItemVulvaPiercings').Property = {
        "Mode": "Edge",
        "Intensity": 1,
        "Effect": [
            "Egged",
            "Vibrating",
            "Edged"
        ]
    }

    InventoryWear(TempChar, 'ButtPlugLock', 'ItemButt', RTColour);
    InventoryGet(TempChar, 'ItemButt').Property = {
        "Type": "ChainShort",
        "Effect": [
            "Freeze",
            "ForceKneel",
            "IsChained",
            "Lock"
        ],
        "SetPose": [
            "Kneel"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'SciFiPleasurePanties', 'ItemPelvis', RTColour);
    InventoryGet(TempChar, 'ItemPelvis').Property = {
        "Intensity": 3,
        "ShockLevel": 2,
        "ShowText": true,
        "Effect": [
            "Egged",
            "DenialMode",
            "Vibrating",
            "Lock"
        ],
        "LockButt": true,
        "LockCrotch": true,
        "Block": [
            "ItemVulva",
            "ItemVulvaPiercings",
            "ItemButt"
        ],
        "OrgasmLock": 1,
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'HeavyLatexCorset', 'ItemTorso', RTColour);

    InventoryWear(TempChar, 'VibeNippleClamp', 'ItemNipples', RTColour);
    InventoryGet(TempChar, 'ItemNipples').Property = {
        "Mode": "Edge",
        "Intensity": 1,
        "Effect": [
            "Egged",
            "Vibrating",
            "Edged"
        ]
    }

    InventoryWear(TempChar, 'RoundPiercing', 'ItemNipplesPiercings', RTColour);
    InventoryGet(TempChar, 'ItemNipplesPiercings').Property = {
        "Type": "Chain",
        "Difficulty": 0,
        "Block": [
            "ItemNeck"
        ],
        "AllowActivityOn": [
            "ItemNeck"
        ],
        "Effect": [
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'FuturisticBra', 'ItemBreast', RTColour);
    InventoryGet(TempChar, 'ItemBreast').Property = {
        "HeartRate": 134,
        "HeartIcon": false,
        "Type": "Solid2",
        "Effect": [
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'StrictLeatherPetCrawler', 'ItemArms', RTColour);

    InventoryWear(TempChar, 'FuturisticMittens', 'ItemHands', RTColour);
    InventoryGet(TempChar, 'ItemHands').Property = {
        "Effect": [
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'FuturisticCollar', 'ItemNeck', RTColour);
    InventoryGet(TempChar, 'ItemNeck').Property = {
        "OpenPermission": false,
        "OpenPermissionChastity": false,
        "OpenPermissionArm": false,
        "OpenPermissionLeg": false,
        "BlockRemotes": true,
        "Effect": [
            "BlockRemotes",
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'CollarAutoShockUnit', 'ItemNeckAccessories', RTColour);
    InventoryGet(TempChar, 'ItemNeckAccessories').Property = {
        "Intensity": 2,
        "Sensitivity": 3,
        "ShowText": true,
        "Type": null,
        "Effect": [
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'CollarChainShort', 'ItemNeckRestraints', RTColour);

    InventoryWear(TempChar, 'FuturisticHarnessBallGag', 'ItemMouth', RTColour);
    InventoryGet(TempChar, 'ItemMouth').Property = {
        "Type": null,
        "Effect": [
            "BlockMouth",
            "GagLight",
            "Lock"
        ],
        "AutoPunish": 3,
        "AutoPunishUndoTime": 0,
        "AutoPunishUndoTimeSetting": 3600000,
        "OriginalSetting": null,
        "ChatMessage": true,
        "BlinkState": 0,
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'LatexPostureCollar', 'ItemMouth2', RTColour);

    InventoryWear(TempChar, 'FuturisticMuzzle', 'ItemMouth3', RTColour);
    InventoryGet(TempChar, 'ItemMouth3').Property = {
        "Type": "n1h1s0",
        "Difficulty": 10,
        "Block": [
            "ItemMouth",
            "ItemMouth2"
        ],
        "Effect": [
            "BlockMouth",
            "Lock"
        ],
        "Hide": [
            "Mouth",
            "ItemNoseNoseRing"
        ],
        "HideItem": [],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'InteractiveVRHeadset', 'ItemHead', RTColour);
    InventoryGet(TempChar, 'ItemHead').Property = {
        "Type": "b2f2g1",
        "Difficulty": 6,
        "CustomBlindBackground": "Dungeon",
        "Block": [],
        "Effect": [
            "VR",
            "BlindHeavy",
            "Prone",
            "VRAvatars",
            "KinkyDungeonParty",
            "Lock"
        ],
        "Hide": [
            "ItemNoseNoseRing",
            "Mask",
            "Glasses"
        ],
        "HideItem": [],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'NoseHook', 'ItemNose', RTColour);

    InventoryWear(TempChar, 'KirugumiMask', 'ItemHood', RTColour);
    InventoryGet(TempChar, 'ItemHood').Property = {
        "Type": "e0m0b0br0op2ms1",
        "Difficulty": 15,
        "Block": [],
        "Effect": [
            "BlindHeavy",
            "Prone",
            "Lock"
        ],
        "Hide": [
            "Head"
        ],
        "HideItem": [],
        "OverridePriority": 35,
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'FuturisticEarphones', 'ItemEars', RTColour);
    InventoryGet(TempChar, 'ItemEars').Property = {
        "Effect": [
            "Lock"
        ],
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'WoodenSign', 'ItemMisc', ['#000000', '#000000', '#FFFFFF']);
    InventoryGet(TempChar, 'ItemMisc').Property = {
        "Text": "Ignore",
        "Text2": "do not free"
    }

    InventoryWear(TempChar, 'Kennel', 'ItemDevices');
    InventoryGet(TempChar, 'ItemDevices').Property = {
        "Type": "ClosedPadding",
        "Effect": [
            "OneWayEnclose",
            "Prone",
            "Freeze",
            "Lock"
        ],
        "Difficulty": 10,
        "LockedBy": "MistressPadlock",
        "LockMemberNumber": LockChar
    }

    InventoryWear(TempChar, 'CeilingChain', 'ItemAddon', RTColour);

    InventoryWear(TempChar, 'LeatherToeCuffs', 'ItemBoots', RTColour);
 
    ChatRoomCharacterUpdate(TempChar);
return;}

CommandCombine(
	{
		Tag: 'boop',
		Action: args => {
			let target = parseInt(args);
			let character = ChatRoomCharacter.find(x => x.MemberNumber == target)
			if(character == null)
			{
				return;
			}
			boop(character)
		}
	}
)

CommandCombine(
	{
		Tag: 'unboop',
		Action: args => {
			let target = parseInt(args);
			let character = ChatRoomCharacter.find(x => x.MemberNumber == target)
			if(character == null)
			{
				return;
			}
			CharacterReleaseTotal(character);
            ChatRoomCharacterUpdate(character);
		}
	}
)