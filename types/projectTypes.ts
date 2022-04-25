/**
 * Deepgram project
 */
export type Project = {
  /**
   * Unique identifier of the project
   */
  project_id: string;
  /**
   * User provided name of the project
   */
  name?: string;
  /**
   * Name of the company associated with the project. Optional.
   */
  company?: string;
};

export type ProjectPatchResponse = {
  /**
   * Success message.
   */
  message: string;
};

export type ProjectPatchRequest = {
  /**
   * User provided name of the project. Optional.
   * */
  name?: string;
  /**
   * Name of the company associated with the project. Optional.
   * */
  company?: string;
};

export type ProjectResponse = {
  projects: Array<Project>;
};
