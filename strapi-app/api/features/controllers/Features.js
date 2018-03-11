'use strict';

/**
 * Features.js controller
 *
 * @description: A set of functions called "actions" for managing `Features`.
 */

module.exports = {

  /**
   * Retrieve features records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.features.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a features record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.features.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an features record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.features.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an features record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.features.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an features record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.features.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
