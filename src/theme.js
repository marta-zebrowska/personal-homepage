const colorName = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    porcelain: "#F2F3F4",
    mercury: "#E5E5E5",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    tropicalBlue: "#CDE0F7",
    anakiwa: "#8CC2FF",
    scienceBlueLight: "rgba(3, 102, 214, 0.2)",
    scienceBlueLightDarkTheme: "rgba(3, 102, 214, 0.5)",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    parsley: "rgba(20, 70, 32, 0.2)",
    violet: "#090A33",
    tundora: "#414141",
    lightBlack: "#313131",
    mineShaft: "#252525",
};

const commonTheme = {
    breakpoint: {
        mobileMin: 360,
        mobileMax: 767,
        tablet: 991,
        desktop: 1199,
    },
    boxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
};

export const lightTheme = {
    ...commonTheme,
    color: {
        primary: colorName.scienceBlue,
        textPrimary: colorName.mineShaft,
        site: {
            background: colorName.whiteLilac,
            text: colorName.slateGray,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.ironTransparent,
            shadow: colorName.anakiwa,
            active: colorName.parsley,
        },
        boxBackground: colorName.white,
        headerLine: colorName.mercury,
        tile: {
            border: colorName.porcelain,
            borderHover: colorName.tropicalBlue,
            header: colorName.scienceBlue,
        },
        link: {
            text: colorName.scienceBlue,
            underline: colorName.scienceBlueLight,
            hover: colorName.dodgerBlue,
        },
        socialIcon: {
            colorName: colorName.black,
            hover: colorName.scienceBlue,
        },
        themeSwitcher: {
            background: colorName.mercury,
            border: colorName.slateGray,
            icon: colorName.white,
        },
    }
};

export const darkTheme = {
    ...commonTheme,
    color: {
        primary: colorName.dodgerBlue,
        textPrimary: colorName.white,
        site: {
            background: colorName.mineShaft,
            text: colorName.white,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.ironTransparent,
            shadow: colorName.shipCove,
            active: colorName.parsley,
        },
        boxBackground: colorName.lightBlack,
        headerLine: colorName.tundora,
        tile: {
            border: colorName.tundora,
            borderHover: colorName.scienceBlueLightDarkTheme,
            header: colorName.white,
        },
        link: {
            text: colorName.scienceBlue,
            underline: colorName.scienceBlueLight,
            hover: colorName.dodgerBlue,
        },
        socialIcon: {
            colorName: colorName.white,
            hover: colorName.scienceBlue,
        },
        themeSwitcher: {
            background: colorName.slateGray,
            border: colorName.white,
            icon: colorName.mineShaft,
        },
    }
};