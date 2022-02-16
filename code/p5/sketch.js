let serial, splitter;
let latestData = "waiting for data";
let inch = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    serial = new p5.SerialPort();
    serial.list();
    serial.open("COM5");
    serial.on('connected', serverConnected);
    serial.on('list', gotList);
    serial.on('data', gotData);
    serial.on('error', gotError);
    serial.on('open', gotOpen);
    serial.on('close', gotClose);
}

function serverConnected() {
    print("Connected to Server");
}

function gotList(thelist) {
    print("List of Serial Ports:");
    for (let i = 0; i < thelist.length; i++) {
        print(i + " " + thelist[i]);
    }
}

function gotOpen() {
    print("Serial Port is Open");
}

function gotClose() {
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

function gotError(theerror) {
    print(theerror);
}

function gotData() {
    let currentString = serial.readLine();
    trim(currentString);
    if (!currentString) return;
    latestData = currentString;
}

function gotRawData(thedata) {
    print("gotRawData" + thedata);
}

function draw() {
    //index
    if (latestData < 4) {
        fill(233, 56, 20);
        rect(200, 200, 200, 200);
    } else {
                fill(23, 56, 220);
        rect(200, 200, 200, 200);
    }

}

function mousePressed() {
    //https://p5js.org/reference/#/p5/clear
    clear();
    //citation end
}
