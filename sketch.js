const canvasSketch = require("canvas-sketch");

const settings = {
  // Enable an animation loop
  animate: true,
  // Set loop duration to 3
  duration: 6,
  // Use a small size for better GIF file size
  dimensions: [1290, 1290],
  // Optionally specify a frame rate, defaults to 30
  fps: 60,
};

// Start the sketch
canvasSketch(() => {
  return ({ context, width, height, playhead }) => {
    // Fill the canvas with pink
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    // Get a seamless 0..1 value for our loop
    const t = Math.sin(playhead * Math.PI);

    // Animate the thickness with 'playhead' prop
    const thickness = Math.max(5, Math.pow(t, 0.55) * width * 0.5);

    // Rotate with PI to create a seamless animation
    const rotation = playhead * Math.PI;

    // Draw a rotating white rectangle around the center
    const cx = width / 2;
    const cy = height / 2;
    const length = height * 0.5;
    context.fillStyle = "white";
    context.save();
    context.translate(cx, cy);
    context.rotate(rotation);
    context.fillRect(-thickness / 2, -length / 2, thickness, length);
    context.restore();
  };
}, settings);
