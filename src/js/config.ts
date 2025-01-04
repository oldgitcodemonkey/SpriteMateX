export function get_config() {
  const config = {
    version: 0.40,
    sprite_x: 32,
    sprite_y: 32,
    colour_depth: 16,
    type: "Sprite",
    palettes: {
      default: [
        "#000000",
        "#ffffff",
        "#880000",
        "#AAFFEE",
        "#CC44CC",
        "#00CC55",
        "#0000AA",
        "#EEEE77",
        "#DD8855",
        "#664400",
        "#FF7777",
        "#333333",
        "#777777",
        "#AAFF66",
        "#0088FF",
        "#BBBBBB",
      ],
      greyscale: [
        "#000000",
        "#111111",
        "#222222",
        "#333333",
        "#444444",
        "#555555",
        "#666666",
        "#777777",
        "#888888",
        "#999999",
        "#AAAAAA",
        "#BBBBBB",
        "#CCCCCC",
        "#DDDDDD",
        "#EEEEEE",
        "#FFFFFF",
      ],
      commodore: [
        "#000000",
        "#ffffff",
        "#883333",
        "#77cccc",
        "#883399",
        "#55aa44",
        "#222299",
        "#eeff77",
        "#885522",
        "#553300",
        "#cc6677",
        "#444444",
        "#777777",
        "#aaff99",
        "#7766ee",
        "#bbbbbb",
      ],
      custom: [
        "#000000",
        "#ffffff",
        "#880000",
        "#AAFFEE",
        "#CC44CC",
        "#00CC55",
        "#0000AA",
        "#EEEE77",
        "#DD8855",
        "#664400",
        "#FF7777",
        "#333333",
        "#777777",
        "#AAFF66",
        "#0088FF",
        "#BBBBBB",
      ],
    },
    selected_palette: "default",
    window_tools: {
      top: 50,
      left: 20,
    },
    window_editor: {
      top: 50,
      left: 210,
      zoom: 10,
      grid: true,
    },
    window_preview: {
      top: 50,
      left: 700,
      zoom: 4,
    },
    window_list: {
      top: 460,
      left: 210,
      width: 440,
      height: 270,
      zoom: 3,
    },
    window_palette: {
      top: 50,
      left: 110,
      zoom: 1,
    },
    window_animate: {
        top: 50,
        left: 900,
        zoom: 4,
      },
      window_animate_list: {
        top: 270,
        left: 700,
        width: 440,
        height: 270,
        zoom: 3,
      },
    };

  return config;
}