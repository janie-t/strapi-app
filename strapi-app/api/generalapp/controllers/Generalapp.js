'use strict';

/**
 * Generalapp.js controller
 *
 * @description: A set of functions called "actions" for managing `Generalapp`.
 */

module.exports = {

  /**
   * Retrieve generalapp records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.generalapp.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a generalapp record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.generalapp.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an generalapp record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.generalapp.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an generalapp record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.generalapp.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an generalapp record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.generalapp.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
