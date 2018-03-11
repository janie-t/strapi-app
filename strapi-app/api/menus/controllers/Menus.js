'use strict';

/**
 * Menus.js controller
 *
 * @description: A set of functions called "actions" for managing `Menus`.
 */

module.exports = {

  /**
   * Retrieve menus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.menus.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a menus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.menus.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an menus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.menus.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an menus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.menus.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an menus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.menus.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
