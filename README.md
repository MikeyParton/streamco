# Considerations

## State management
- I decided to use a reducer to handle state updates. It is probably overkill because there are only really 2 pieces of state, but doing it this way improves maintainability since cross cutting state updates can be modelled more like reactions to events.
- I used context to share the global state with the movies & series pages. For this simple application, state could have easily just been lifted up to the parent App component. However this would mean that you'd have to load the feed even when the user visits the homepage. With context, we can defer loading it until the user really needs it and improve performance.

## Sorting/filtering
- After fetching the feed I decided to sort it straight away. There are only 100 elements in the array and each page requires the same sorting, so I figured it was better to do it once and store the result.
- To show the programTypes on each page, I made a utility function to filter and find the first 21 that match. At the moment this is recalculated on every render. Performance could be improved for multiple visits in the future by caching the result.

## Components/CSS
- Each page is split into its own chunk with React Lazy. While the page chunk is loading, Suspense provides a blank fallback. I chose a blank fallback because the chunk loads relatively fast and I wanted to avoid the loading state flash. Once Concurrent React is stable this could be handled by the maxDuration prop.
- I chose to use no css processing or frameworks, just good old fashioned BEM. If this were a production application, I would at least want to use some sort of pre-processor so I could use SASS. CSS modules as a bare minimum could also help organise the scope of component based styles.
- Lots of components have ended up being quite specific for the use cases I needed. It's not bad for now, but obviously components like the Grid would be made more generalised if other use cases arise.

## Typechecks
- If there was more time, I would have liked to include something like Typescript to improve maintainability. But since the app is quite simple, I decided to focus my efforts elsewhere.
