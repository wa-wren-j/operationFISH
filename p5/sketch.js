let serial, splitter;
let latestData = "waiting for data";
let inch = 0;
let img;
let img1,img2,img3,img4;

function preload() {
    img = loadImage('asset/empty.png');
    img1 = loadImage('asset/straw.png');
    img2 = loadImage('asset/bottle.png');
    img3 = loadImage('asset/wrapper.png');
    img4 = loadImage('asset/cap.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    image(img, 0, 0);

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
    if (latestData < 2) {
        image (img1,0,0);
    }
        if (latestData < 4) {
        image (img2,0,0);
    }
        if (latestData < 6) {
        image (img3,0,0);
    }
        if (latestData < 8) {
        image (img4,0,0);
    }
}

function mousePressed() {
    //https://p5js.org/reference/#/p5/clear
    redraw();
    //citation end
}
