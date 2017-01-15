# ble-midi

[![NPM version](https://badge.fury.io/js/ble-midi.svg)](http://badge.fury.io/js/ble-midi)
[![Build Status](https://travis-ci.org/skratchdot/ble-midi.png?branch=master)](https://travis-ci.org/skratchdot/ble-midi)
[![Code Climate](https://codeclimate.com/github/skratchdot/ble-midi.png)](https://codeclimate.com/github/skratchdot/ble-midi)
[![Coverage Status](https://coveralls.io/repos/skratchdot/ble-midi/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/ble-midi?branch=master)
[![dependencies Status](https://david-dm.org/skratchdot/ble-midi/status.svg)](https://david-dm.org/skratchdot/ble-midi)
[![devDependencies Status](https://david-dm.org/skratchdot/ble-midi/dev-status.svg)](https://david-dm.org/skratchdot/ble-midi?type=dev)

[![NPM](https://nodei.co/npm/ble-midi.png)](https://npmjs.org/package/ble-midi)


## Description

A Bluetooth Low Energy MIDI library written in javascript.

#### The following service and characteristic are defined:
- MIDI Service (UUID: `03B80E5A-EDE8-4B33-A751-6CE34EC4C700`)
- MIDI Data I/O Characteristic (UUID: `7772E5DB-3868-4112-A1A9-F2669D106BF3`)
- Supports:
  - `write` (encryption recommended, write without response is required)
  - `read` (encryption recommended, respond with no payload)
  - `notify` (encryption recommended)


## Getting Started

```bash
# install cli
npm install -g ble-midi

# install helper tool
brew install fluidsynth

# download soundfont
wget https://dl.dropboxusercontent.com/u/8126161/GeneralUser_GS_1.471.zip
unzip -p GeneralUser_GS_1.471.zip "GeneralUser GS 1.471/GeneralUser GS v1.471.sf2" > gs.sf2

# start fluidsynth
fluidsynth -d ./gs.sf2

# find fluidsynth port
ble-midi list-devices

# start advertising (if fluidsynth was device #2- if not, just use correct device number)
ble-midi advertise --midi-out 2

# now connect to "skratchdot-ble-midi" from another device and start playing
```

## Links

### Specifications
- [midi.org](https://www.midi.org/specifications/item/bluetooth-le-midi)
- [Apple](https://developer.apple.com/bluetooth/Apple-Bluetooth-Low-Energy-MIDI-Specification.pdf)

### Helpful MIDI Tools
- [fluidsynth](http://www.fluidsynth.org/)
- [midikeys](http://www.manyetas.com/creed/midikeys.html)
- [S. Christian Collins GeneralUser GS Soundfont](http://www.schristiancollins.com/generaluser.php)

### Android
- [Bluetooth Low Energy on Android](https://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
- [MIDI Package Summary](https://developer.android.com/reference/android/media/midi/package-summary.html)
- [BLE Test Peripheral](https://github.com/WebBluetoothCG/ble-test-peripheral-android)
- [BLE MIDI Example App for Android](https://github.com/kshoji/BLE-MIDI-for-Android)

### Products
- [Yamaha MD-BT01](https://www.amazon.com/Yamaha-Wireless-5-PIN-MIDI-Adapter/dp/B01CFOHF6U/)
- [Quicco Sound mi.1](https://www.amazon.com/Wireless-MIDI-Interface-mi-1-Rev-3/dp/B01D61QK6W/)

### Random
- http://shawnhymel.com/703/bluetooth-low-energy-peripherals-with-javascript/


## License

Copyright (c) 2017 [skratchdot](https://www.skratchdot.com/)  
Licensed under the
[MIT license](https://github.com/skratchdot/ble-midi/blob/master/LICENSE-MIT).
