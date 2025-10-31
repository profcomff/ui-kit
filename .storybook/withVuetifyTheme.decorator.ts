import { h } from 'vue';
// 1. Import Storybook types to satisfy TypeScript checks (TS7006).
import type { StoryContext, StoryFn } from '@storybook/vue3-vite';
import StoryWrapper from './StoryWrapper.vue';

// Explicitly type the parameters using Storybook's official types.
export const withVuetifyTheme = (storyFn: StoryFn, context: StoryContext) => {
    // storyFn() returns the story's root VNode.
    const story = storyFn(context.args, context);

    return () => {
        return h(
            StoryWrapper,
            {}, // Props for StoryWrapper
            {
                // Puts your story into StoryWrapper's "story" slot with your story args
                // We pass the VNode returned by storyFn() and spread the args from the context.
                story: () => h(story, { ...context.args }),
            }
        );
    };
};
