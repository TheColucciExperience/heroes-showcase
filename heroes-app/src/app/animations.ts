import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

/**
  * Routable animations. This is pretty much based on the angular 'routing'
  * tutorial. Here we use 'optional: true' to avoid errors before the component
  * has loaded.
  */
export const slideInAnimation =
  trigger('routeAnimation', [
    transition( '* <=> *', [
      style( { position: 'relative' } ),
      query( ':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true } ),
      query( ':enter', [
        style( { left: '-100%' } )
      ], { optional: true } ),
      query( ':leave', animateChild(), { optional: true } ),
      group( [
        query( ':leave', [
          animate( '340ms ease-out', style( { left: '100%' } ) )
        ], { optional: true } ),
        query( ':enter', [
          animate( '340ms ease-out', style( { left: '0%' } ) )
        ], { optional: true } )
      ] ),
      query( ':enter', animateChild(), { optional: true } )
    ] )
  ]);
