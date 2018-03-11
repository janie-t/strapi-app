'use strict';

/**
 * Buttons.js controller
 *
 * @description: A set of functions called "actions" for managing `Buttons`.
 */

module.exports = {

  /**
   * Retrieve buttons records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.buttons.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a buttons record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.buttons.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an buttons record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.buttons.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an buttons record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.buttons.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an buttons record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.buttons.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
