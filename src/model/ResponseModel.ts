/**
 * Response model, to store the data from the backend.
 */
export default interface ResponseModel<T = unknown> {
  /**
   * Response code.
   */
  code: number

  /**
   * Information on the response
   */
  message?: string

  /**
   * The requested data will be placed in the attribute `data`
   */
  data?: T

  /**
   * The timestamp of when this response model was generated
   */
  timestamp: number
}