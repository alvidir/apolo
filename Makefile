.DEFAULT_GOAL := all

all: dist
	@cd demo && npm install && npm run build

install:
	@npm install

uninstall:
	@rm -rf node_modules package-lock.json

dist: install
	@npm run build

distclean:
	@rm -rf dist

mostlyclean: distclean
	@rm -rf demo/node_modules demo/package-lock.json demo/dist

clean: distclean uninstall
	@rm -rf demo/node_modules demo/package-lock.json demo/dist