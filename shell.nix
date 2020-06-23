with import <nixpkgs> {};
mkShell{
  buildInputs = [
    nodejs
    autoconf
    automake
    libtool
    file
    pkg-config
    nasm
    python
  ];
  shellHook = ''
      export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}