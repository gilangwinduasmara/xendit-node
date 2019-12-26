import Errors from './errors';
import { CardService } from './card';
import { VAService } from './va';
import { DisbursementService } from './disbursement';
import { InvoiceService } from './invoice';
import { EWalletService } from './ewallet';
import { XenditOptions } from './xendit_opts';

export = class Xendit {
  constructor(opts: XenditOptions);
  static Errors = Errors;
  Card: typeof CardService;
  VirtualAcc: typeof VAService;
  Disbursement: typeof DisbursementService;
  Invoice: typeof InvoiceService;
  EWalletService: typeof EWalletService;
};
