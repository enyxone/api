export const db = {
  async query(sql: string, params: unknown[]) {
    return await DB.prepare(sql).bind(...params).all();
  }
};
