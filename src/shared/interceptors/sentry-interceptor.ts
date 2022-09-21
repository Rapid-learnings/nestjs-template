import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as Sentry from '@sentry/minimal';

/**
 * SentryInterceptor to transform outgoing objects into plain js objects
 * @category interceptors
 */
@Injectable()
/**
 * @publicApi @see (Interceptors)
 */
export class SentryInterceptor implements NestInterceptor {
  /**
   * Returns an event for `Interceptor` 
   * @param context 
   * @param next middleware command to execute nest paramaters in api routes
   * @returns exception
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(null, (exception) => {
        Sentry.captureException(exception);
      }),
    );
  }
}
