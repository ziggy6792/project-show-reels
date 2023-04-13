# Brief

User Story 911
**_Creative Agency User_** want **_to create a new show reel from a collection of clips_** in order to **_present my agency commercials to the advertiser_**
Background

- A show reel has name, video standard, video definition and total duration expressed as timecode (hh:mm:ss:ff)
- Video standard is either PAL or NTSC
- Video definition is SD or HD
- A show reel can have 1 or more video clips
- A video clip has a name, description, video standard, video definition, start timecode and end
  timecode
- A timecode is expressed as HH:MM:ss:ff
  - HH>hours
  - MM>minutes
  - ss>seconds
  - ff>frames
  - PALvideohas25fps(25framespersecond)i.e.1frameis40milliseconds o NTSCvideohas30fps

# Requirements

1. Create a proof of concept user interface for the customer
2. The UI should show the complete duration of all the clips in the show reel
3. The UI should allow me to give my show reel a name.
4. The UI should allow me to add and remove clips from a list. This should update the total duration
5. One can not mix video standards and video definitions in a video reel. i.e. NTSC clip cannot be added to PAL video reel. HD clip could not be added to a SD video reel.

# Demo here

[Demo here](https://www.dropbox.com/s/td2qyrkqublhvv7/Presentation.mov?dl=0)

# Show Reels Backend

## Getting Started

- `cd show-reels-backend`
- `yarn install`
- `yarn start`

## Run Tests

`yarn test`

# Show Reels Frontend

## Getting Started

- `cd show-reels-frontend`
- `yarn install`

Make sure backend is running

`yarn start`

Note: To populate the ui with some data run `yarn test` in the backend repository

## Run Tests

`yarn test`
