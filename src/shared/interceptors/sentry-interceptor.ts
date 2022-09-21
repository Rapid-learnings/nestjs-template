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
   * @param next 
   * @returns 
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(null, (exception) => {
        Sentry.captureException(exception);
      }),
    );
  }
}
