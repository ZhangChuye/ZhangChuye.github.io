from PIL import Image
import os

def create_robot_favicon(size):
    # Create a simple robot icon using shapes
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    pixels = img.load()
    
    # Define robot colors
    robot_color = (52, 152, 219)  # Blue color
    
    # Calculate dimensions
    head_size = int(size * 0.6)
    head_start = (size - head_size) // 2
    antenna_width = max(1, int(size * 0.1))
    eye_size = max(1, int(size * 0.15))
    
    # Draw antenna
    for y in range(0, head_start):
        for x in range((size - antenna_width) // 2, (size + antenna_width) // 2):
            pixels[x, y] = robot_color
            
    # Draw head (square)
    for y in range(head_start, head_start + head_size):
        for x in range(head_start, head_start + head_size):
            pixels[x, y] = robot_color
            
    # Draw eyes
    eye_y = head_start + head_size // 3
    left_eye_x = head_start + head_size // 3 - eye_size // 2
    right_eye_x = head_start + (2 * head_size) // 3 - eye_size // 2
    
    # Draw eyes (white squares)
    for y in range(eye_y, eye_y + eye_size):
        for x in range(left_eye_x, left_eye_x + eye_size):
            pixels[x, y] = (255, 255, 255)
        for x in range(right_eye_x, right_eye_x + eye_size):
            pixels[x, y] = (255, 255, 255)
    
    return img

# Ensure images directory exists
os.makedirs('images', exist_ok=True)

# Create different sizes
sizes = [16, 32, 96, 192]
for size in sizes:
    img = create_robot_favicon(size)
    img.save(f'images/favicon-{size}x{size}.png')

# Create ICO file
img = create_robot_favicon(32)
img.save('images/favicon.ico', format='ICO') 