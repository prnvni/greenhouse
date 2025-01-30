import cv2
import numpy as np

# Open the webcam
cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: Cannot access the webcam")
    exit()

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    
    if not ret:
        break

    # Resize for easier processing (optional)
    frame_resized = cv2.resize(frame, (640, 480))
    
    # Convert to HSV color space
    hsv = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2HSV)

    # Define the green color range in HSV
    lower_green = np.array([35, 40, 40])  # Adjust based on environment
    upper_green = np.array([90, 255, 255])  # Adjust based on environment

    # Create a mask for green color
    mask = cv2.inRange(hsv, lower_green, upper_green)

    # Apply the mask to get the green parts of the image
    green_areas = cv2.bitwise_and(frame_resized, frame_resized, mask=mask)

    # Calculate the density of green pixels
    green_pixel_count = np.sum(mask == 255)
    total_pixel_count = mask.size
    density_percentage = (green_pixel_count / total_pixel_count) * 100

    # Display the density on the frame
    cv2.putText(frame_resized, f"Green Density: {density_percentage:.2f}%", 
                (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Show the original frame and the masked frame
    cv2.imshow("Original Frame", frame_resized)
    cv2.imshow("Green Areas", green_areas)

    # Break the loop on pressing 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close windows
cap.release()
cv2.destroyAllWindows()
