export type Error = {
    /**
     * @description The type of error.
     * @enum {string}
     */
    type: "config" | "config-fetch" | "timeout" | "permission" | "plan";
    /** @description A human-readable error message. */
    message: string;
}


export type TriggerParams = {
    [key: string]:
    | Partial<number>
    | Partial<string>
    | Partial<boolean>
    | Partial<{ [key: string]: unknown }>;
};

export type Trigger = {
    /**
 * @description The type of trigger.
 * @enum {string}
 */
    type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
    /**
     * Format: date-time
     * @description The date and time the trigger was received.
     */
    received_at: string;
    /** @description The user who triggered the Pipeline. */
    actor: {
        /**
         * Login
         * @description The login information for the user on the VCS.
         */
        login: string;
        /** @description URL to the user's avatar on the VCS */
        avatar_url: string;
    };
}

export type VCS = {
    /**
     * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
     * @example GitHub
     */
    provider_name: string;
    /**
     * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    target_repository_url: string;
    /**
     * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     * @example feature/design-new-api
     */
    branch?: string;
    /**
     * @description The code review id.
     * @example 123
     */
    review_id?: string;
    /**
     * @description The code review URL.
     * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
     */
    review_url?: string;
    /**
     * @description The code revision the pipeline ran.
     * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
     */
    revision: string;
    /**
     * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     * @example v3.1.4159
     */
    tag?: string;
    /** @description The latest commit in the pipeline. */
    commit?: {
        /** @description The subject of the commit message. */
        subject: string;
        /** @description The body of the commit message. */
        body: string;
    };
    /**
     * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    origin_repository_url: string;
}

export type Message = {
    /** @description A human-readable message */
    message: string;
}