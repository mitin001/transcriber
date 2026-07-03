# 3. Video Scanning

> Film is shot at 24 frames per second. However, if it were projected at that rate, a flickering quality to the moving image would be noticeable.

The eye holds an image for about 1/31 s = 32 ms, but if we're showing 24 images per second, each frame would fill 1/24 s = 42 ms. Because some of this time is taken by the movie projector closing the shutter, we could see the dark for longer than 32 ms, and that would make us notice the flicker.

> Persistence of vision means that the retina, the light-sensitive portion of the human eye, retains the image exposed to it for a certain period of time. This image then fades as the eye waits to receive the next image. The threshold of retention is 1⁄30 to 1⁄32 of a second. If the images change on the retina at a rate slower than that, the eye sees the light and then the dark that follows. If the images change at a faster rate, the eye sees the images as continuous motion and not as individual images.

To reduce the flickering, each frame is shown twice, so the dark from the closed shutter is only visible for at most 16 ms at a time while the eye is still holding the previously shown frame.

> In film, this concept is exploited by simply showing each frame twice. The picture in the gate of the film projector is held, and the shutter opens twice. Then the film moves to the next frame and the shutter again reveals the picture twice. In this way, 48 frames per second are shown while the projector runs at 24 frames per second, and the eye perceives smooth, continuous motion.

Old TVs would flicker in a similar way because there was potential for our eye to notice the dark between the changing frames for up to 1/30 s = 33.3 ms, which is a little longer than the eye's speed of retaining an image (32 ms). For this reason, the TVs would interlace their images: show the odd lines of the frame and then even lines, all in 33.3 ms. That way, there's at most 16.7 ms of dark during which the eye could still hold the previous (interlaced) image.

> The 30-frames-per-second frame rate of video could potentially allow the flicker of the changing frames to be noticeable. Therefore, the frame rate needed to be increased. The simplest way to do this would be to double the frame rate to 60 frames per second. This was a technological challenge in the early days of tube electronics. The engineers of the time solved the problem by breaking the 30 frames they were able to capture into 60 half frames called fields, each field containing alternating scan lines of the frame.

With new TVs, there's no more dark between the frames, so even if the image is shown for 33.3 ms, it's immediately followed by a new image so there is no flicker. Unfortunately, since so much video was created to be displayed on interlaced displays, we now see the odd lines from the previous frame superimposed with the even lines of the next frame, and the picture can look like teeth of a comb if there's enough constant between the frames (e.g., an action sequence with fast motion).

> When interlaced material is presented on progressive displays, it can lead to a distracting artifact called combing. This leaves fine lines extending from areas of fast motion similar to the teeth of a comb.

![17426677070621297197376569419821](https://github.com/user-attachments/assets/6264a5de-5d6c-4425-96aa-991369f61348)
