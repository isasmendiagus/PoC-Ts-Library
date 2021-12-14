const { Scanner, ScannerCfg, ScannerEvents } = require("./lib/scanner/index");



const scanner = new Scanner(new ScannerCfg());


scanner.on(ScannerEvents.SCANNER_LOG, (a) => {
    console.log(`${a}`);
});

console.log("Scanner started");
scanner.scanList({"/home/ubuntu/Projects/delete_me/gnulib/build-aux/po/Makefile.in.in": "FULL_SCAN"});



