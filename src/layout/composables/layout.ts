/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Date: 2024-01-10 21:46:04
 * @LastEditTime: 2024-01-14 11:51:27
 * @Description: ~
 */
const layoutConfig = reactive({
  // 按钮点击涟漪效果
  ripple: false,
  //黑暗主题开关
  darkTheme: false,
  // 输入方式
  inputStyle: 'outlined',
  // 侧边目录展开
  menuMode: 'static',
  // 当前主题
  theme: 'lara-light-indigo',
  // 页面样式放缩大小
  scale: 14,
  // 当前窗口菜单栏
  activeMenuItem: null
});

const layoutState = reactive({
  staticMenuDesktopInactive: false,
  overlayMenuActive: false,
  profileSidebarVisible: false,
  configSidebarVisible: false,
  staticMenuMobileActive: false,
  menuHoverActive: false
});

export function useLayout() {
  /**
   *
   * @param theme 当前主题
   * @param darkTheme 是否为黑暗主题
   */
  const changeThemeSettings = (theme: string, darkTheme: boolean) => {
    layoutConfig.darkTheme = darkTheme;
    layoutConfig.theme = theme;
  };

  /**
   *
   * @param scale 放缩范围
   */
  const setScale = (scale: number) => {
    layoutConfig.scale = scale;
  };

  /**
   *
   * @param item 活跃菜单record
   */
  const setActiveMenuItem = (item: Record<string, any>) => {
    layoutConfig.activeMenuItem = item.value || item;
  };

  const onMenuToggle = () => {
    if (layoutConfig.menuMode === 'overlay') {
      layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
    }

    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
    }
  };

  const isSidebarActive = computed(
    () => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive
  );

  const isDarkTheme = computed(() => layoutConfig.darkTheme);

  return {
    layoutConfig: toRefs(layoutConfig),
    layoutState: toRefs(layoutState),
    changeThemeSettings,
    setScale,
    onMenuToggle,
    isSidebarActive,
    isDarkTheme,
    setActiveMenuItem
  };
}
