/**
 * Paged data model, mainly used for pagination data.
 */
export default interface PageModel<T> {
  /**
   * Current paging data
   */
  records: T[]

  /**
   * Total number of pages
   */
  total: number

  /**
   * Current page data size
   */
  size: number

  /**
   * Current page number
   */
  current: number

  /**
   * Specifies the total number of pages into which the data has been divided.
   */
  pages: number
}