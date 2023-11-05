makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    Stop()
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    B()
})
function F () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
}
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    F()
})
function Lt () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
}
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    Lt()
})
function B () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
}
function Rt () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        if (control.eventValue() == 1) {
            F()
            basic.showString("A")
        } else if (control.eventValue() == 3) {
            B()
            basic.showString("B")
        } else if (control.eventValue() == 5) {
            Lt()
            basic.showString("C")
        } else if (control.eventValue() == 7) {
            Rt()
            basic.showString("D")
        } else if (control.eventValue() == 9) {
            Stop()
            basic.showString("1")
        } else if (control.eventValue() == 11) {
            basic.showString("2")
        } else if (control.eventValue() == 13) {
            basic.showString("3")
        } else if (control.eventValue() == 15) {
            basic.showString("4")
        } else {
            basic.clearScreen()
        }
    }
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    Rt()
})
function Stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
}
let lastValue = 0
Stop()
lastValue = 0
bluetooth.startLEDService()
basic.showString("GAMEPAD DEMO")
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
