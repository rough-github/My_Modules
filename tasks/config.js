const ASSET_ROOT = "src";
const DEST_ROOT = "public";

const rootForHTML = ({
	src: `${ASSET_ROOT}/**/*.html`,
	dest: `${DEST_ROOT}`
})

const rootForCSS = ({
	watchSrc: `${ASSET_ROOT}/sass/**/*.scss`,
	mainSrc: `${ASSET_ROOT}/sass/main.scss`,
	lintDest: `${ASSET_ROOT}/sass`,
	dest: `${DEST_ROOT}/css`
});
const rootForJS = ({
	src: `${ASSET_ROOT}/js/**/*.js`,
	lintDest: `${DEST_ROOT}/js`,
  dest: `${DEST_ROOT}/js`,
})

const rootForImage = ({
  src: `${ASSET_ROOT}/img/**/*.{png,jpg}`,
  dest: `${DEST_ROOT}/img`
});

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	rootForHTML,
	rootForCSS,
	rootForJS,
	rootForImage,
	isProd
}
