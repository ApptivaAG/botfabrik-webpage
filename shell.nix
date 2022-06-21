with import <nixpkgs> {};
mkShell{
  buildInputs = [
    nodejs-16_x
    autoconf
    automake
    libtool
    file
    pkg-config
    nasm
    python
  ];
}