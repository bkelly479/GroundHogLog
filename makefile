IMAGE=groundHogLog
CONTAINER=ghl

build:
	@docker build -t ${IMAGE} .
#@docker build -t groundhoglog .
run:
	@docker run --rm --name ${CONTAINER} -p3000:3000 ${IMAGE}
#@docker run --rm --name ghl -p3000:3000 groundhoglog
