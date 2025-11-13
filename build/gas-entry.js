"use strict";
// src/gas-entry.ts
// Just reference the hello function so it's present globally in Apps Script
// (GAS will make all top-level functions global automatically)
// If you want to explicitly attach:
// if 'hello' is imported or defined above
// Or just re-declare if you can't import:
function hello(name) {
    return "Hello, ".concat(name, "!");
}
