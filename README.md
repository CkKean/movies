# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3). This is the codebase for an interview test assignment.

You can preview the app via [Movies](https://ckkean.github.io/movies/)

## Table of Contents

- [Tasks Completed](#tasks-completed)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Tasks Completed

The following **required** functionality is completed:
- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [ ] All images fade in.
- [ ] Implement lazy load image.
- [x] Customize the highlight and selection effect of the cell.
- [x] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

The following **additional** features are implemented:

- [x] Simple pagination.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/CkKean/movie-web-application.git
   ```
2. Navigate to the project directory:
   ```
   cd project-directory
   ```
3. **Open** the project in your preferred **IDE** or **code editor** (e.g., Visual Studio Code) or **prompt terminal**.

4. Install dependencies:
   ```
   yarn install
   ```

## Usage

1. Start the development server:
   ```
   yarn start
   ```
2. Open the project in your web browser by visiting `http://localhost:3000`.


## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Demo](./public/demo.gif)

## License

    Copyright [2023] [Chin Chee Kean]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

**Note**: The provided TMDB Access Token is for evaluation purposes only and will be disabled after the evaluation period. To continue using the API, you need to apply for your own API key by following the instructions on The Movie Database API website.