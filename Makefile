image:
	podman build -t offensive-packaging.github.io .

prepare: image
	podman run --rm -ti -v $(shell pwd):/offensive-packaging.github.io offensive-packaging.github.io yarn install

test: prepare
	podman run --rm -ti --network host -v $(shell pwd):/offensive-packaging.github.io offensive-packaging.github.io yarn dev

build: prepare
	podman run --rm -ti --network host -v $(shell pwd):/offensive-packaging.github.io offensive-packaging.github.io yarn next build
	podman run --rm -ti --network host -v $(shell pwd):/offensive-packaging.github.io offensive-packaging.github.io yarn next export -o _build

publish: build
	rclone sync --progress --delete-after _build/ linode-frankfurt:offensive-packaging.github.io/
